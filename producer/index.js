import amqp from "amqplib"

const queue = "test"
const text = {
  item_id: "macbook",
  text: "This is a sample message to send receiver to check the ordered Item Availablility",
};

(async () => {
  let connection
  try {
    connection = await amqp.connect("amqp://admin:1qaz2wsx@localhost:5672");
    const channel = await connection.createChannel();

    await channel.assertQueue(queue)
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(text)))
    console.log(" [x] Sent '%s'", text)
    await channel.close()
  } catch (err) {
    console.warn(err)
  } finally {
    if (connection) await connection.close()
  }
})()