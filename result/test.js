"use strict";
async function main() {
    let x = { ...{ name: "john" }, ...{ pos: [1, 2, 3] } };
    console.log(x);
}
main();
