// const promise = fetch("https://jsonplaceholder.typicode.com/posts/1");
import { logger } from "./utils/logger";
// promise.then((res) => res.json()).then((post) => console.log(post));

function sleep(ms: number) {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(ms);
        }, ms)
    );
}

async function do_something(value: any, ms = 1000) {
    return new Promise(async (resolve, reject) => {
        await sleep(ms);
        resolve(value);
    });
}

let i = 0;
async function loop() {
    await sleep(200);
    do_something(i, 300).then((value) => {
        logger.info(value);
    });
    logger.info(`Synchronous ${i}`);
    i++;
    loop();
}

loop();
