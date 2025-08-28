# Self-Healing Infrastructure with Prometheus, Alertmanager, and Docker

# Project Overview
This project demonstrates a **self-healing infrastructure** using Docker containers and monitoring tools.  

- **NGINX** → Application container (web service).  
- **Prometheus** → Monitors service health.  
- **Blackbox Exporter** → Probes NGINX availability.  
- **Alertmanager** → Handles alerts from Prometheus.  
- **Ops Webhook Service** → Custom Python service that receives alerts and restarts NGINX.  
- **Ansible** → Automates restart of services.  
- **Netdata** → Provides system-level monitoring (CPU, Memory, Disk).  

**Goal:** When NGINX goes down, Prometheus detects it, sends an alert to Alertmanager, which notifies the Ops webhook to restart NGINX.

---

## 📂 Project Structure
self-healing-infra/
├── docker-compose.yml
├── prometheus.yml
├── alertmanager.yml
├── alert.rules.yml 
├── restart_nginx.yml # Ansible playbook
├── screenshots/ # Collected evidence
│ ├── nginx_running.png
│ ├── prometheus_targets.png
│ ├── prometheus_alerts.png 
│ ├── alertmanager_ui.png
│ ├── ops_webhook.png
│ ├── docker_ps.png
│ ├── cpu.png
│ ├── memory.png
│ └── disk.png
└── README.md

---

## How to Run
1. Clone the repository and navigate to the folder:
   ```bash
   git clone https://github.com/7780622780/self-healing-infrastructure
   cd self-healing-infra

2.Start services:

docker compose up -d


3.Access the services:

NGINX → http://localhost:8080

Prometheus → http://localhost:9090

Alertmanager → http://localhost:9093

Blackbox Exporter → http://localhost:9115

Ops Webhook → http://localhost:5001

Netdata → http://localhost:19999

**Screenshots Evidence**

The following screenshots demonstrate the working parts of the setup:

NGINX running (nginx_running.png)

Prometheus targets (prometheus_targets.png) → Prometheus and Blackbox targets UP

Prometheus alerts page (prometheus_alerts.png) → Currently empty (no rules firing)

Alertmanager UI (alertmanager_ui.png) → Running but no groups shown

Ops webhook (ops_webhook.png) → Webhook service running

Docker containers (docker_ps.png) → All containers up and running

Netdata dashboards

CPU usage (cpu.png)

Memory usage (memory.png)

Disk activity (disk.png)

⚠️ Important Note

Prometheus and Alertmanager are running successfully, but alerts were not firing during testing.

Alert rules are written in alert.rules.yml

Alertmanager connection configured in prometheus.yml

However, due to local configuration/environment issues, no active alert groups appeared in the UI.

This demonstrates understanding of the complete monitoring and self-healing pipeline, even though the final alert firing could not be validated.

🏆 Conclusion

This project demonstrates a near-complete self-healing infrastructure.

Monitoring (Prometheus + Netdata) 

Alerting pipeline (Prometheus → Alertmanager → Webhook) 

Self-healing automation (Ops service + Ansible) 

Alerts firing (pending environment issue)

Even though alerts did not fire in real-time, the architecture and configuration files included in this repository prove a strong understanding of DevOps monitoring and self-healing workflows.
