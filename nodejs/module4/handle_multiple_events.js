const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("fire", (address) => {
    console.log("call fire department and give address: ", address);
});

eventEmitter.on("crime", (address) => {
    console.log("call police department and give address: ", address);
});


eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2");
eventEmitter.emit("crime","In bangalore, kormangala, sector 5, house no 5");




