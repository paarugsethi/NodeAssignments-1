const EventEmitter = require('events');
const { emit } = require('process');

const emitter = new EventEmitter();
var count = 0;

emitter.on("message", () => {
    console.log("message triggered");
})

setInterval(() => {
    count++;
    console.log(count)
    emitter.emit("message");
    if (count === 10){
        process.exit();
    }
}, 1000)