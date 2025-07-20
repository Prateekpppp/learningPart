const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event listener
eventEmitter.on("on", ()=>{
    console.log("make a phone call to police department")
});

// Emit the event
eventEmitter.emit("crime");

