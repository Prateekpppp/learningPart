// subscribe.js
const mqtt = require('mqtt');

const brokerUrl = 'mqtt://localhost:1883';
const topic = 'my/topic';

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  client.subscribe(topic, (err) => {
    if (!err) {
      console.log(`Subscribed to topic: ${topic}`);
    } else {
      console.error('Error subscribing:', err);
    }
  });

  client.publish(topic, message, (err) => {
    if (!err) {
      console.log(`Published message "${message}" to topic: ${topic}`);
    } else {
      console.error('Error publishing:', err);
    }
    client.end(); // Disconnect after publishing for this example
  });
});

client.on('message', (receivedTopic, message) => {
  console.log(`Received message on topic "${receivedTopic}": ${message.toString()}`);
});

client.on('error', (err) => {
  console.error('Error:', err);
});

client.on('disconnect', () => {
  console.log('Disconnected from MQTT broker.');
});