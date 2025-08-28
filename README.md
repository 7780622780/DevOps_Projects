🚀 DevOps Projects Repository

This repository contains two complete DevOps projects implemented as part of my learning and practice.

Project 1: Self-Healing Infrastructure with Prometheus, Alertmanager & Ansible

Project 2: CI/CD Pipeline with GitHub Actions & Docker (Local Deployment)

📌 Project 1: Self-Healing Infrastructure with Prometheus, Alertmanager & Ansible
🎯 Objective

Automatically detect service failures and recover them using alerts and automation.

🛠️ Tools Used

Prometheus → Metrics collection & monitoring

Alertmanager → Handles alerts from Prometheus

Ansible → Executes auto-healing actions (restart services)

Docker → Containerized setup for Prometheus/Alertmanager

Shell Scripting → Support scripts

⚙️ Implementation Steps

Deploy a sample service (e.g., NGINX or custom web app).

Configure Prometheus to scrape service metrics and uptime.

Define alerting rules (e.g., service down, CPU > 90%).

Configure Alertmanager with webhook integration.

Webhook triggers Ansible playbook to restart the failed service automatically.

Verify auto-healing by manually stopping the service and checking recovery.

📂 Key Deliverables

prometheus.yml → Prometheus configuration

alertmanager.yml → Alert rules and routing

ansible/playbook.yml → Auto-healing tasks

Demo Screenshots → Alert triggered & service auto-restarted

📌 Project 2: CI/CD Pipeline with GitHub Actions & Docker (No Cloud Needed)
🎯 Objective

Set up a full CI/CD pipeline that builds a Docker image, runs tests, pushes to Docker Hub, and deploys locally.

🛠️ Tools Used

GitHub Actions → CI/CD automation

Docker & Docker Hub → Image build and distribution

Docker Compose → Local container deployment

Node.js / Sample App → Example project for pipeline testing

⚙️ Implementation Steps

Write a Dockerfile for the application.

Create docker-compose.yml for local deployment.

Set up GitHub Actions Workflow:

Run unit tests (Node.js app).

Build and tag Docker image.

Push image to Docker Hub using DOCKER_USERNAME & DOCKER_PASSWORD secrets.

Deploy locally using Docker Compose on a self-hosted runner.

Verify Deployment by checking service health endpoint.

📂 Key Deliverables

Dockerfile → Containerize app

docker-compose.yml → Deployment setup

.github/workflows/ci.yml → CI/CD pipeline config

Screenshots → GitHub Actions runs, Docker image, local deployment

📊 Outcomes & Learnings

Project 1 taught how monitoring + automation tools can create a self-healing infrastructure.

Project 2 showed how to build a full CI/CD pipeline without relying on cloud providers.

🏁 Conclusion

Both projects demonstrate end-to-end DevOps practices, from monitoring, alerting, and automated recovery to CI/CD automation with Docker and GitHub Actions.

By completing these projects, I gained:

Hands-on experience in infrastructure monitoring and auto-healing systems.

Practical understanding of CI/CD pipelines and containerized deployments.


Confidence to design production-ready DevOps workflows for real-world applications.


## 🔗 Additional References

In case you face any issues, or if you want to view the projects separately for clarity, you can check the original repositories here:

- [CI/CD Pipeline with GitHub Actions & Docker](https://github.com/7780622780/cicd-docker-local)  
- [Self-Healing Infrastructure with Prometheus, Alertmanager & Ansible](https://github.com/7780622780/self-healing-infrastructure)  

These repos contain the same project files individually, which might help for easier navigation or debugging.
