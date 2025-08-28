from flask import Flask, request, jsonify
import subprocess
import json
import sys

app = Flask(__name__)

@app.route("/", methods=["POST", "GET"])
def root():
    if request.method == "GET":
        return "ops webhook up", 200

    payload = request.get_json(force=True, silent=True) or {}
    print("Received alert payload:", json.dumps(payload, indent=2), flush=True)

    # Fire only when WebDown is actually firing
    alerts = payload.get("alerts", [])
    firing = [a for a in alerts if a.get("status") == "firing" and a.get("labels", {}).get("alertname") == "WebDown"]

    if firing:
        print("WebDown firing -> running Ansible playbook...", flush=True)
        try:
            result = subprocess.run(
                ["ansible-playbook", "/app/ansible/playbook.yml", "-vv"],
                capture_output=True,
                text=True,
                check=True
            )
            print(result.stdout, flush=True)
            print(result.stderr, flush=True)
            return jsonify({"ok": True, "action": "restart web", "ansible_rc": 0}), 200
        except subprocess.CalledProcessError as e:
            print("Ansible failed", e.returncode, e.stdout, e.stderr, flush=True)
            return jsonify({"ok": False, "error": "ansible failed", "rc": e.returncode}), 500

    return jsonify({"ok": True, "no_action": True}), 200

if __name__ == "__main__":
    # Run Flask
    app.run(host="0.0.0.0", port=5001)
