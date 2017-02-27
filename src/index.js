import * as fs from "fs";

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
