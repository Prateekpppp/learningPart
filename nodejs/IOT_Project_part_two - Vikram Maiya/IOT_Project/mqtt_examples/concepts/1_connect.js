const mqtt = require('mqtt');

const brokerUrl = 'mqtt://localhost:1883'; // Replace if using a different broker

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Connected to MQTT broker!');
  client.end(); // Disconnect immediately after connecting for this example
});

client.on('error', (err) => {
  console.error('Connection error:', err);
});

client.on('disconnect', () => {
  console.log('Disconnected from MQTT broker.');
});