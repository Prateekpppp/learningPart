const EventEmitter = require("events")

class CustomEmitter extends EventEmitter {
    whatIsYourName() {
       console.log("My name is CustomEmitter")
    }
}

const myCustomEmitter = new CustomEmitter();

myCustomEmitter.whatIsYourName();
