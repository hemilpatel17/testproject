var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
  console.log("Connection successful");
  eventEmitter.emit('data_recieved');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_recieved' , function(){
  console.log("data received successfully");
});

eventEmitter.emit('connection');

console.log("program ended");
