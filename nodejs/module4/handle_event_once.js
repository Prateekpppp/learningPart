const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event listener
eventEmitter.once("fire", (address) => {
    console.log("call fire department and give address: ", address);
});

// Emit the event
eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2"); // Executes callback
// Emit the event
eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2"); // Ignored
// Emit the event
eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2"); // Ignored
// Emit the event
eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2"); // Ignored
// Emit the event
eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2"); // Ignored
// Emit the event
eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2"); // Ignored
// Emit the event
eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2"); // Ignored
// Emit the event
eventEmitter.emit("fire","In bangalore, hsr layout, sector 10, house no 2"); // Ignored
