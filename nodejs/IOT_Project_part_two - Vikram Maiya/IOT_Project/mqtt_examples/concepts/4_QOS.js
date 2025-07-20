const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
  client.publish('CRICKET/VIRAT', 'zero runs', { qos: 2 });
  client.end();
});

// QoS 0 (At most once): Message is sent without any guarantee of delivery. It might arrive zero or more times.
// QoS 1 (At least once): Message will be delivered at least once, but might be delivered multiple times in case of network issues.
// QoS 2 (Exactly once): Message will be delivered exactly once. This is the highest level of guarantee but involves more overhead.