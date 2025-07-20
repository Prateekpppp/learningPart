const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const eventHanler = (content) => {
    console.log("watch the video: ", content);
}

eventEmitter.on("ndtv", eventHanler);


eventEmitter.emit("ndtv","xyz party won the election");

eventEmitter.off("ndtv", eventHanler);

eventEmitter.emit("ndtv","apple party won the election");
eventEmitter.emit("ndtv","apple party won the election");


