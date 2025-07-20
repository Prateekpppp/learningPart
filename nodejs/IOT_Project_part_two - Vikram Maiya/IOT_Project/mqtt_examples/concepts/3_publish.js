const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
  client.publish('CRICKET/VIRAT', '100 runs');
  client.end();
});