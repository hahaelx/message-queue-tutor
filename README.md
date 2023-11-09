# message-queue-tutor
A simple RabbitMQ demo.

## Start RabbitMQ message

```bash
docker-compose up -d
```
RabbitMQ manage web url:
http://localhost:15672/

## Start Consume

Start a node process to waitting to recived message from producer.

```bash
cd ./consumer
npm start
```

## Send message from Producer

Start a node process to waitting to recived message from producer.

```bash
cd ./producer
npm start
```