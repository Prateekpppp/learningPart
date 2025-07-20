const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
  client.subscribe('CRICKET/VIRAT');
  client.subscribe('CRICKET/SACHIN');
});

client.on('message', (topic, message) => {
  console.log(topic, message.toString());
});
