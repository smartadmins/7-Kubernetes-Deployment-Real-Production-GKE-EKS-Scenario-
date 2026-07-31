# 7-Kubernetes-Deployment-Real-Production-GKE-EKS-Scenario-
# ☸️ Kubernetes Deployment on GKE/EKS (Production-Ready Microservices)

![Kubernetes](https://img.shields.io/badge/Kubernetes-v1.33-blue?logo=kubernetes)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![GKE](https://img.shields.io/badge/Google-GKE-4285F4?logo=googlecloud)
![EKS](https://img.shields.io/badge/AWS-EKS-FF9900?logo=amazonaws)
![Nginx](https://img.shields.io/badge/Nginx-Frontend-green?logo=nginx)
![Flask](https://img.shields.io/badge/Flask-Backend-black?logo=flask)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue?logo=mysql)
![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-orange?logo=prometheus)
![Grafana](https://img.shields.io/badge/Grafana-Dashboard-F46800?logo=grafana)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📖 Project Overview

This project demonstrates a **production-style Kubernetes deployment** of a containerized microservices application on **Google Kubernetes Engine (GKE)** or **Amazon Elastic Kubernetes Service (EKS)**.

The solution follows Kubernetes best practices including:

- High Availability
- Self-Healing
- Horizontal Auto Scaling
- Rolling Updates
- Load Balancing
- Secrets Management
- Configuration Management
- Ingress Routing
- Monitoring with Prometheus & Grafana

This project is designed for **DevOps**, **Cloud**, **Platform Engineering**, and **Site Reliability Engineering (SRE)** portfolios.

---

# 🏗 Architecture

```
                    Internet
                         │
                LoadBalancer / Ingress
                         │
          ┌──────────────┴──────────────┐
          │                             │
     Frontend (Nginx)              Backend (Flask)
      Deployment x3               Deployment x3
          │                             │
          └──────────────┬──────────────┘
                         │
                  ClusterIP Service
                         │
                     MySQL Database
                         │
                  Persistent Storage

                Prometheus + Grafana
```

---

# 📂 Repository Structure

```
7-Kubernetes-Deployment-GKE-EKS
│
├── README.md
├── app
│   ├── frontend
│   └── backend
│
├── kubernetes
│   ├── namespace.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   ├── mysql-deployment.yaml
│   ├── mysql-service.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── ingress.yaml
│   ├── hpa.yaml
│   └── network-policy.yaml
│
├── monitoring
│
├── scripts
│
└── screenshots
```

---

# 🚀 Technologies Used

| Technology | Purpose |
|------------|----------|
| Kubernetes | Container Orchestration |
| Docker | Containerization |
| GKE / EKS | Managed Kubernetes |
| Nginx | Frontend |
| Python Flask | Backend API |
| MySQL | Database |
| ConfigMap | Configuration |
| Secret | Secure Credentials |
| Ingress | External Routing |
| HPA | Auto Scaling |
| Prometheus | Monitoring |
| Grafana | Dashboard |

---

# 📦 Kubernetes Components

✔ Namespace

✔ Deployment

✔ ReplicaSet

✔ Service

✔ ConfigMap

✔ Secret

✔ Ingress

✔ Horizontal Pod Autoscaler

✔ Network Policy

✔ Resource Limits

✔ Readiness Probe

✔ Liveness Probe

---

# ⚙ Features

- Production-ready Deployment
- Three Backend Replicas
- Frontend Deployment
- MySQL Database
- ConfigMap Configuration
- Kubernetes Secrets
- LoadBalancer Service
- NGINX Ingress
- Horizontal Pod Autoscaler
- Rolling Updates
- Zero Downtime Deployment
- Resource Requests & Limits
- Health Checks
- Prometheus Monitoring
- Grafana Dashboard

---

# 🖥 Deploy Kubernetes Cluster

## Option 1 - Google Kubernetes Engine (GKE)

```bash
gcloud container clusters create dev-cluster \
--num-nodes=3 \
--zone=asia-south1-a
```

Connect Cluster

```bash
gcloud container clusters get-credentials dev-cluster \
--zone asia-south1-a
```

Verify

```bash
kubectl get nodes
```

---

## Option 2 - Amazon EKS

```bash
eksctl create cluster \
--name dev-cluster \
--region ap-south-1 \
--nodes 3
```

Verify

```bash
kubectl get nodes
```

---

# 🐳 Build Docker Images

Backend

```bash
docker build -t yourdockerhub/backend:v1 app/backend
```

Frontend

```bash
docker build -t yourdockerhub/frontend:v1 app/frontend
```

---

# 📤 Push Images

```bash
docker push yourdockerhub/backend:v1

docker push yourdockerhub/frontend:v1
```

---

# ☸ Deploy Kubernetes Resources

Namespace

```bash
kubectl apply -f kubernetes/namespace.yaml
```

ConfigMap

```bash
kubectl apply -f kubernetes/configmap.yaml
```

Secret

```bash
kubectl apply -f kubernetes/secret.yaml
```

MySQL

```bash
kubectl apply -f kubernetes/mysql-deployment.yaml
kubectl apply -f kubernetes/mysql-service.yaml
```

Backend

```bash
kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/backend-service.yaml
```

Frontend

```bash
kubectl apply -f kubernetes/frontend-deployment.yaml
kubectl apply -f kubernetes/frontend-service.yaml
```

Ingress

```bash
kubectl apply -f kubernetes/ingress.yaml
```

Horizontal Pod Autoscaler

```bash
kubectl apply -f kubernetes/hpa.yaml
```

---

# 🔍 Verify Deployment

```bash
kubectl get all

kubectl get pods

kubectl get svc

kubectl get ingress

kubectl get hpa

kubectl describe pod <pod-name>
```

---

# 📈 Scaling Application

Manual Scaling

```bash
kubectl scale deployment backend --replicas=5
```

Horizontal Pod Autoscaler

```bash
kubectl autoscale deployment backend \
--cpu-percent=50 \
--min=2 \
--max=10
```

---

# 🔄 Rolling Updates

Deploy New Version

```bash
kubectl set image deployment/backend backend=yourdockerhub/backend:v2
```

Check Rollout

```bash
kubectl rollout status deployment/backend
```

Rollback

```bash
kubectl rollout undo deployment/backend
```

---

# 📊 Install Monitoring

Add Helm Repository

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm repo update
```

Install Monitoring Stack

```bash
helm install monitoring prometheus-community/kube-prometheus-stack
```

---

# 📈 Metrics Collected

- CPU Usage
- Memory Usage
- Network Usage
- Pod Health
- Container Restarts
- Node Status
- Cluster Utilization

---

# 📷 Expected Screenshots

Include screenshots in the **screenshots/** folder.

- Kubernetes Cluster
- Running Pods
- Services
- Ingress
- Horizontal Pod Autoscaler
- Prometheus Targets
- Grafana Dashboard
- Application Homepage

---

# 📁 Important Kubernetes Files

| File | Purpose |
|------|----------|
| namespace.yaml | Namespace |
| configmap.yaml | Application Configuration |
| secret.yaml | Database Credentials |
| mysql-deployment.yaml | Database Deployment |
| backend-deployment.yaml | Backend Deployment |
| frontend-deployment.yaml | Frontend Deployment |
| ingress.yaml | External Routing |
| hpa.yaml | Horizontal Pod Autoscaler |
| network-policy.yaml | Network Security |

---

# ✅ Expected Output

- Kubernetes Cluster Running
- Frontend Accessible via LoadBalancer / Ingress
- Backend Running with 3 Replicas
- MySQL Connected Successfully
- ConfigMap Loaded
- Secrets Mounted Securely
- Pods Auto-Heal
- Traffic Distributed Across Pods
- Rolling Updates Without Downtime
- Auto Scaling Enabled
- Monitoring Dashboard Available

---

# 🛡 Production Best Practices

- Use Kubernetes Secrets for sensitive data.
- Configure CPU and memory requests/limits.
- Enable readiness and liveness probes.
- Use rolling updates with rollback support.
- Restrict traffic using Network Policies.
- Store database data on Persistent Volumes.
- Expose services through Ingress with TLS.
- Monitor workloads using Prometheus and Grafana.
- Automate deployments using GitHub Actions or Jenkins.
- Scan container images using Trivy before deployment.

---

# 🎯 Learning Outcomes

After completing this project, you will understand:

- Kubernetes Architecture
- GKE/EKS Cluster Management
- Deployments & ReplicaSets
- Services & Networking
- ConfigMaps & Secrets
- Ingress Controllers
- Horizontal Pod Autoscaling
- Rolling Updates & Rollbacks
- Health Checks
- Monitoring Kubernetes Clusters
- Production Deployment Best Practices

---

# 📜 License

This project is licensed under the **MIT License**.

---

# ⭐ Support

If you found this project useful:

⭐ Star this repository

🍴 Fork this repository

📢 Share it with the DevOps community

Happy Learning! 🚀
