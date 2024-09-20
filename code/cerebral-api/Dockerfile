FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app

ENV AZURE_OPENAI_API_KEY=your_azure_openai_api_key \
    CHATGPT_MODEL=gpt-35-turbo \
    AZURE_OPENAI_ENDPOINT=your_azure_openai_endpoint \
    OPENAI_API_VERSION=2024-03-01-preview \
    INFLUXDB_URL=http://influxdb.cerebral.svc.cluster.local:8086 \
    INFLUXDB_BUCKET=cerebral \
    INFLUXDB_TOKEN=secret-token \
    INFLUXDB_ORG=InfluxData \
    REDIS_URL=redis://redis-service.cerebral.svc.cluster.local:6379

EXPOSE 5003

CMD ["python", "app.py"]