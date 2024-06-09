"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const promise = fetch("https://jsonplaceholder.typicode.com/posts/1");
const logger_1 = require("./utils/logger");
// promise.then((res) => res.json()).then((post) => console.log(post));
function sleep(ms) {
    return new Promise((resolve) => setTimeout(() => {
        resolve(ms);
    }, ms));
}
async function do_something(value, ms = 1000) {
    return new Promise(async (resolve, reject) => {
        await sleep(ms);
        resolve(value);
    });
}
let i = 0;
async function loop() {
    await sleep(200);
    do_something(i, 300).then((value) => {
        logger_1.logger.info(value);
    });
    logger_1.logger.info(`Synchronous ${i}`);
    i++;
    loop();
}
loop();
