const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("fire", (address) => {
    console.log("call fire department and give address: ", address);
});

eventEmitter.on("fire", (address) => {
    console.log("NDTV will telecast news: ", address);
});

eventEmitter.on("fire", (address) => {
    console.log("Republic TV will telecast news: ", address);
});

eventEmitter.on("fire", (address) => {
    console.log("CNN will telecast news: ", address);
});

eventEmitter.on("fire", (address) => {
    console.log("Times of india will print the news: ", address);
});


eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2");




