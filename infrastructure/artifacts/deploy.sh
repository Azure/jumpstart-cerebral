#!/bin/bash

# Create folders
mkdir cerebral
cd cerebral
sudo mkdir /var/lib/influxdb2
sudo chmod 777 /var/lib/influxdb2

# Deploy Nginx
helm upgrade --install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace ingress-nginx --create-namespace

# Create namespace
kubectl apply -f https://raw.githubusercontent.com/Azure/jumpstart-cerebral/refs/heads/main/deployment/cerebral-ns.yaml

# Deploy InfluxDB
kubectl apply -f https://raw.githubusercontent.com/Azure/jumpstart-cerebral/refs/heads/main/deployment/influxdb.yaml

# Configure InfluxDB
kubectl apply -f https://raw.githubusercontent.com/Azure/jumpstart-cerebral/refs/heads/main/deployment/influxdb-setup.yaml

# Deploy data simulator
kubectl apply -f https://raw.githubusercontent.com/Azure/jumpstart-cerebral/refs/heads/main/deployment/cerebral-simulator.yaml

# Deploy SQL Lite
kubectl apply -f https://raw.githubusercontent.com/Azure/jumpstart-cerebral/refs/heads/main/deployment/mssql.yaml

# Configure SQL Lite
kubectl apply -f https://raw.githubusercontent.com/Azure/jumpstart-cerebral/refs/heads/main/deployment/mssql-setup.yaml

# Validate setup
kubectl get all -n cerebral

# Deploy Redis
kubectl apply -f https://raw.githubusercontent.com/Azure/jumpstart-cerebral/refs/heads/main/deployment/redis.yaml

# Deploy Cerebral app
wget https://raw.githubusercontent.com/Azure/jumpstart-cerebral/refs/heads/main/deployment/cerebral-api.yaml

# Update the config with your Azure OpenAI instance details
nano cerebral-api.yaml

# Apply the changes
kubectl apply -f cerebral-api.yaml

# Verify the deployment
kubectl get all -n cerebral