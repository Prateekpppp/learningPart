const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1883'); // In realworld, this script will be running inside the sensor gateway in customer place and will be collecting the data from sensors and publishing the sensor values to mqtt broker running in aws. 

client.on('connect', () => {
    setInterval(async () => {
          const topics = ["GATEWAY1/TEMP/LIVINGROOM", "GATEWAY1/HUMID/KITCHEN", "GATEWAY1/MOTION/HALLWAY", "GATEWAY1/LIGHT/BEDROOM", "GATEWAY1/WATER/BATHROOM", "GATEWAY1/GAS/GARAGE", "GATEWAY1/PRESSURE/GARDEN", "GATEWAY1/AIRQUALITY/BALCONY", "GATEWAY1/SOILMOISTURE/PLANT1", "GATEWAY1/INFRARED/FRONTDOOR"]
    
          topics.forEach((topic) => {
            const randomValue = Math.floor(Math.random() * 100) + 1;    
            client.publish(topic, String(randomValue));
          });
      }, 3000);
});