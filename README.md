# Cerebral – Hackathon 2024 

## Introduction

The Cerebral Hackathon 2024 team has laid the foundation for the next generation of the Cerebral solution, an intelligent assistant at the edge that utilizes Generative AI and various Adaptive Cloud services. This innovative solution is designed to simplify tasks for different roles across industries such as Retail, Logistics, and Manufacturing.

### Demo Overview

In the demo, Cerebral serves as the central intelligence engine that interacts with different personas, showcasing how it assists in various scenarios:

[![Hack2024 - Cerebral.mp4]](https://microsoft-my.sharepoint-df.com/personal/likamrat_microsoft_com/_layouts/15/embed.aspx?UniqueId=d0c79d5a-2d25-4116-8293-44d36a68f3b4&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create)

- **Retail (Lisa)**: As a store manager, Lisa relies on Cerebral to monitor inventory levels. When Cerebral detects low stock for certain products, it proactively alerts Lisa and helps her pre-fill the order form with the required quantities. This feature saves Lisa time and ensures that the store is always well-stocked, preventing potential sales losses due to out-of-stock items.

- **Logistics (Mark)**: As a warehouse supervisor, Mark uses Cerebral to stay informed about operational issues. In this case, Cerebral detects a problem with a sensor indicating a broken fridge that could lead to a shortage of products (e.g., 10 boxes of cheese). Cerebral notifies Mark about this issue and helps him by pre-filling the service order form. This ensures that Mark can quickly respond to maintenance needs and avoid further product losses, maintaining the warehouse's efficiency.

- **Manufacturing (Tom)**: As an operations technician (OT), Tom benefits from Cerebral's ability to provide step-by-step troubleshooting guidance. Tom can consult Cerebral for documentation and even ask natural language questions to understand how to resolve complex problems, such as fixing an issue with a production machine or addressing food safety concerns. For example, if there's an electricity issue affecting the salmon production line, Cerebral helps guide Tom through the process of identifying and fixing the problem, reducing downtime and ensuring product quality.

By integrating seamlessly across different roles, Cerebral demonstrates its multi-industry, multi-role capabilities, making it a powerful AI assistant for enhancing operational workflows, decision-making processes, and cross-functional collaboration in diverse industries.

### Key Objectives
The work done during the hackathon has focused on the following pillars:

- **Expand Cerebral for Multi-Industry and Multi-Role Use:** Make Cerebral capable of supporting various industries and roles, adapting to different requirements and workflows.
- **Enhance User Experience and Graphical Interface:** Improve the user interface and overall user experience to make interactions more intuitive and efficient.
- **Enable Proactive Notifications:** Implement a proactive notification module based on the most critical components of each business.
- **Decouple the Frontend from the Backend:** Separate the graphical interface from the backend to enhance flexibility and scalability.
- **Expand Real-Time Data Capabilities:** Extend the ability to access real-time data not only from time-series databases but also by converting natural language questions into queries for relational databases.
- **Maintain a Hybrid Model:** Provide the option to choose between using Azure OpenAI or leveraging the PHI-3 model and a vector database at the edge.

## Cerebral Architecture Overview

The architecture of Cerebral is designed to facilitate seamless integration and real-time interaction across various components, making it a versatile solution for different industrial scenarios.

### Architecture Diagram

![Cerebral Architecture](./img/solution_architecture.png)

### Key Components

1. **Cerebral Engine**: 
   - **React JS Web Application**: Offers a user-friendly graphical interface that interacts with the backend.
   - **REST API Query Processing Orchestrator**: Manages incoming queries and orchestrates data retrieval.
   - **Proactive Recommendation and Alerts Engine**: Provides alerts and recommendations based on predefined rules or AI insights.
   - **RAG (Retrieval Augmented Generation) at the Edge**: Uses Chroma vector databases and SLM/LLM models (such as Phi-3) to deliver intelligent responses.
   - **Database Connectors**: Facilitates integration with different databases, including InfluxDB, MSSQL Lite, and custom solutions.

2. **Data Sources**:
   - **InfluxDB**: Handles asset telemetry data, providing near real-time data insights.
   - **SQLite**: Stores point-of-sale and inventory data, supporting relational queries.
   - **Data Simulator**: Generates time-series and relational data for testing and simulation.

3. **Azure IoT Operations**: 
   - Incorporates dataflow and MQTT brokers to collect and manage data from IoT devices.

4. **Azure Cognitive Services & OpenAI**: 
   - Offers speech-to-text capabilities and advanced AI-powered data contextualization and query classification.

5. **PowerBI Dashboards & Azure Data Factory**: 
   - Enables data visualization and insights, making it easy to monitor key performance indicators.

## Decision Tree Architecture

The decision tree architecture of Cerebral illustrates how different data types and queries are handled to provide relevant insights and recommendations.

### Decision Tree Diagram

![Cerebral Decision Tree](./img/decision_architecture.png)

### Execution Flow

Cerebral uses a bi-directional query workflow to handle various use cases:

- **Proactive Alerts**: Triggers alerts based on inventory shortages, operational outages, or equipment state.
- **Work Item Prepopulation**: Assists in creating work orders or maintenance requests.
- **Error Summarization**: Provides summaries of operational errors and suggests troubleshooting steps.

Queries are classified into three main types:
- **Near Real-Time Data**: InfluxDB queries are executed to retrieve time-series data.
- **Relational-Based Data**: Queries are converted into SQLite queries to fetch necessary data.
- **OpenAI RAG-Based Queries**: The query is sent to the backend, where the vector database and LLM are used to generate a comprehensive response.

## How to Use Cerebral

Cerebral offers a versatile solution designed to support various roles:
- **Store Managers**: Can use Cerebral to monitor inventory levels and address shortages.
- **Logistics Managers**: Utilize Cerebral to manage equipment status and streamline work orders.
- **Operations Managers**: Benefit from error summaries and troubleshooting support to ensure operational efficiency.

Cerebral’s multi-industry, multi-role capabilities make it a powerful assistant that integrates AI into day-to-day operations seamlessly.

## Getting Started

Follow these steps to set up and use Cerebral in your environment:

1. **Deploy the Backend**: Set up the Cerebral backend components on an edge-located, Arc-enabled Kubernetes cluster.
2. **Connect Data Sources**: Integrate InfluxDB, SQLite, and other required data sources.
3. **Configure the Frontend**: Deploy the React JS web application and connect it to the backend using the provided APIs.
4. **Enable Proactive Alerts**: Configure the proactive alert engine to monitor critical business components.

## Conclusion

The Cerebral solution is built to be adaptive, efficient, and scalable, making it an indispensable tool across multiple industries. By leveraging the power of Generative AI, real-time data processing, and seamless integration with cloud and edge services, Cerebral offers a robust platform for enhancing operational workflows and decision-making processes.
