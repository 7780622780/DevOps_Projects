FROM python:3.11-slim

WORKDIR /app

# Python libs for webhook + Ansible and Docker SDK
RUN pip install --no-cache-dir flask ansible docker \
    && ansible-galaxy collection install community.docker

COPY webhook.py /app/webhook.py
COPY ansible /app/ansible

EXPOSE 5001
CMD ["python", "/app/webhook.py"]
