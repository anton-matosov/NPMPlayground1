// import * as fs from "fs";

async function schrodinger() {
    return new Promise((resolve, reject) => {
        const result = Math.random > 0.5
        setTimeout(() => {
            return result ? resolve('alive') : reject('dead')
        })
    })
}

async function ff () {

    try {
        console.log(await schrodinger())
        // -> ‘alive’
    } catch (err) {
        console.log(err)
        // -> ‘dead’
    }
}

ff()

// import http from 'http';

let http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World 3\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');


