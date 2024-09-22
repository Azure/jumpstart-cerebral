# Cerebral – Hackathon 2024 

## Introduction

The Cerebral Hackathon 2024 team has laid the foundation for the next generation of the Cerebral solution, an intelligent assistant at the edge that utilizes Generative AI and various Adaptive Cloud services. This innovative solution is designed to simplify tasks for different roles across industries such as Retail, Logistics, and Manufacturing.

### Demo Overview

In the demo, Cerebral serves as the central intelligence engine that interacts with different personas, showcasing how it assists in various scenarios:

[![Hack2024 - Cerebral.mp4](./img/video.png)](https://microsoft-my.sharepoint-df.com/personal/likamrat_microsoft_com/_layouts/15/embed.aspx?UniqueId=d0c79d5a-2d25-4116-8293-44d36a68f3b4&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create)


- **Retail (Lisa)**: As a store manager, Lisa relies on Cerebral to monitor inventory levels. When Cerebral detects low stock for certain products, it proactively alerts Lisa and helps her pre-fill the order form with the required quantities. This feature saves Lisa time and ensures that the store is always well-stocked, preventing potential sales losses due to out-of-stock items.

- **Logistics (Mark)**: As a warehouse supervisor, Mark uses Cerebral to stay informed about operational issues. In this case, Cerebral detects a problem with a sensor indicating a broken fridge that could lead to a shortage of products (e.g., 10 boxes of cheese). Cerebral notifies Mark about this issue and helps him by pre-filling the service order form. This ensures that Mark can quickly respond to maintenance needs and avoid further product losses, maintaining the warehouse's efficiency.

- **Manufacturing (Tom)**: As an operations technician (OT), Tom benefits from Cerebral's ability to provide step-by-step troubleshooting guidance. Tom can consult Cerebral for documentation and even ask natural language questions to understand how to resolve complex problems, such as fixing an issue with a production machine or addressing food safety concerns. For example, if there's an electricity issue affecting the salmon production line, Cerebral helps guide Tom through the process of identifying and fixing the problem, reducing downtime and ensuring product quality.

By integrating seamlessly across different roles, Cerebral demonstrates its multi-industry, multi-role capabilities, making it a powerful AI assistant for enhancing operational workflows, decision-making processes, and cross-functional collaboration in diverse industries.

### Key Objectives
The work done during the hackathon has focused on the following pillars:

- **Expand Cerebral for Multi-Industry and Multi-Role Use**: Make Cerebral capable of supporting various industries and roles, adapting to different requirements and workflows.
- **Enhance User Experience and Graphical Interface**: Improve the user interface and overall user experience to make interactions more intuitive and efficient.
- **Enable Proactive Notifications**: Implement a proactive notification module based on the most critical components of each business.
- **Decouple the Frontend from the Backend**: Separate the graphical interface from the backend to enhance flexibility and scalability.
- **Expand Real-Time Data Capabilities**: Extend the ability to access real-time data not only from time-series databases but also by converting natural language questions into queries for relational databases.
- **Maintain a Hybrid Model**: Provide the option to choose between using Azure OpenAI or leveraging the PHI-3 model and a vector database at the edge.
- **Automate Infrastructure Creation as Code**: Implement infrastructure automation using Bicep to streamline the deployment and management process, ensuring that all components are deployed efficiently and consistently across different environments.

## Cerebral Architecture Overview

The architecture of Cerebral is designed to facilitate seamless integration and real-time interaction across various components, making it a versatile solution for different industrial scenarios.

### Architecture Diagram

![Cerebral Architecture](./img/solution_architecture.png)

### Key Components

### Key Components

1. **Cerebral Engine**: 
   The Cerebral Engine is composed of several logical layers, each playing a vital role in the overall architecture. It integrates seamlessly with different components to provide a flexible and adaptive AI-driven experience. The web application is developed in **ReactJS**, allowing it to adapt to multiple scenarios and user requirements across various industries.

   - **React JS Web Application**: This is the user interface layer that offers an intuitive and user-friendly graphical experience. It enables users to interact with Cerebral's capabilities, presenting data and insights in an accessible format. The use of ReactJS makes the application highly adaptable, capable of supporting various workflows and scenarios.

   - **REST API Query Processing Orchestrator**: The REST API layer acts as the main communication hub, managing incoming queries and orchestrating data retrieval from multiple sources. It serves as a gateway that allows Cerebral’s functionalities to be accessed through REST APIs, providing the flexibility to embed Cerebral in different processes and making it agnostic to any graphical interface. This approach enables integration with other systems or applications, enhancing Cerebral's interoperability.

   - **Proactive Recommendation and Alerts Engine**: This component provides proactive alerts and recommendations based on predefined rules or AI insights. It continuously monitors the conditions within databases and generates alerts for critical scenarios. Users can configure natural language questions that the engine converts into queries for time-series or relational databases, enabling analysis of the most critical aspects of their business. This ensures that users are always informed about potential issues or opportunities, helping them make data-driven decisions.

   - **RAG (Retrieval Augmented Generation) at the Edge**: This module utilizes Chroma vector databases along with SLM/LLM models (such as Phi-3) to deliver intelligent responses. The design pattern of Retrieval Augmented Generation (RAG) allows users to work in environments with limited or no internet connectivity while still benefiting from AI capabilities. This enables the deployment of advanced generative AI models at the edge, ensuring low latency and minimal dependence on cloud connectivity.

   - **Database Connectors**: The database connectors facilitate seamless integration with various databases, including InfluxDB, MSSQL Lite, and custom solutions. Cerebral's ability to convert natural language questions into database queries means that users can interact with their data in a more intuitive way. This allows non-technical users to extract insights from time-series or relational databases without needing to understand complex query languages.

2. **Data Sources**: 
   Cerebral’s REST API has the capability to analyze natural language questions posed by users and determine whether they relate to real-time data or document/manual-based information. When the question is identified as related to real-time data, the API consults the appropriate data sources, such as InfluxDB for time-series data or SQLite for relational data.

   - **InfluxDB**: InfluxDB handles telemetry data from various assets, providing near real-time insights. This data source is ideal for monitoring sensor data, allowing users to keep track of asset conditions and operational metrics.

   - **SQLite**: SQLite serves as the storage for point-of-sale (POS) and inventory data, enabling relational queries. This data source is critical for accessing structured data related to products, transactions, and inventory levels within a data warehouse.

   - **Data Simulator**: The data simulator generates both time-series and relational data, providing a testing environment for the Cerebral system. This ensures that users can validate their use cases and workflows in a controlled setting before deploying the solution in a live environment.

3. **Azure IoT Operations**: 
   Cerebral leverages the capabilities of Azure IoT Operations (AIO) to facilitate data communication and processing at the edge. It utilizes the MQTT broker as part of the logic for the Retrieval Augmented Generation (RAG) process, ensuring efficient data flow at the edge. Additionally, AIO's data flow connectors are employed to transmit data to Azure's data services.

   - **MQTT Broker & Data Flow**: The MQTT broker collects and manages data from IoT devices, enabling seamless integration with edge-based systems. This enhances Cerebral’s ability to handle data from a wide range of industrial IoT sensors and devices, supporting real-time decision-making processes.

4. **Azure Cognitive Services & OpenAI**:
   These services enhance Cerebral’s capabilities by providing advanced AI functionalities.

   - **Speech-to-Text & AI-Powered Contextualization**: Azure Cognitive Services offer speech-to-text capabilities, enabling users to interact with Cerebral using voice commands. Additionally, Azure OpenAI provides AI-powered data contextualization and query classification, allowing users to ask complex questions in natural language and receive intelligent responses.

5. **PowerBI Dashboards & Azure Data Factory**:
   These components provide visualization and data orchestration capabilities that are essential for monitoring and analyzing business operations.

   - **Data Visualization & Insights**: PowerBI Dashboards allow users to visualize data, making it easier to monitor key performance indicators (KPIs) and gain actionable insights. Azure Data Factory acts as the data orchestration service, enabling the movement and transformation of data from various sources into the dashboard for comprehensive analysis.


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
