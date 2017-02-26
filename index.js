import {async, await} from "asyncawait";


async function schrodinger() {
    return new Promise((resolve, reject) => {
        const result = Math.random > 0.5
        setTimeout(() => {
            return result ? resolve('alive') : reject('dead')
        })
    })
}

try {
    console.log(await schrodinger())
    // -> ‘alive’
} catch (err) {
    console.log(err)
    // -> ‘dead’
}
