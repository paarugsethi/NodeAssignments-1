const http = require('http');

const users = ["Paarug", "Simran","Namo","Aayush","Sudarsh","Shruti","Vanshika","Sanyam","Aakash","Kunal"]

function getAllUsers(page=1){
    const start = (page - 1) * 3;
    const end = start + 3;
    return users.slice(start, end);
}

function getUsersById(index){
    if (index >= 0 && index < users.length){
        return users[index]
    }
    else{
        return null
    }
}

function addUser (name) {
    users.push(name);
    return users;
}

const server = http.createServer((req, res) => {
    try{
        const [url, query] = req.url.split("?");
        if (url === '/users'){
            if (req.method === "GET"){
                const q = new URLSearchParams(`?${query}`);
                const page = q.get('page') ?? 1;
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(getAllUsers(Number(page))));
            }
            else if (req.method === "POST"){
                const q = new URLSearchParams(`?${query}`);
                const name = q.get('name');
                addUser(name);
                res.writeHead(201, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(getAllUsers()));
            }
        }
        else if (url.startsWith('/users/')){
            const index = Number(url.split('/')[2])
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(getUsersById(index)));
        }
        else{
            throw new Error("Something went wrong")
        }
    }
    catch{
        res.writeHead(500, {'Content-Type': 'application/json'});
    }
    
})

server.listen(3001)

// const sum = require("./sum.js");

// console.log(sum(10,5));