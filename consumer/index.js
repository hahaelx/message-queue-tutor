import amqp from "amqplib"



(async () => {
  try {
    const queue = "test"
    const connection = await amqp.connect("amqp://admin:1qaz2wsx@localhost:5672")
    const channel = await connection.createChannel();

    process.once("SIGINT", async () => {
      await channel.close()
      await connection.close()
    });

    await channel.assertQueue(queue, { durable: true })
    await channel.consume(
      queue,
      (message) => {
        if (message) {
          console.log(
            " [x] Received '%s'",
            JSON.parse(message.content.toString())
          );
        }
      },
      { noAck: true }
    );

    console.log(" [*] Waiting for messages. To exit press CTRL+C");
  } catch (err) {
    console.warn(err);
  }
})();