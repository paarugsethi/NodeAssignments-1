// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify({
//         data: "Hello World!"
//     }));
// })

// server.listen(3001)

const sum = require("./sum.js");

console.log(sum(10,5));