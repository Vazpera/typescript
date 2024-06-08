interface hasPos {
    pos: number[];
}

interface hasName {
    name: string;
}

async function main() {
    let x: hasPos | hasName = { ...{ name: "john" }, ...{ pos: [1, 2, 3] } };

    console.log(x);
}

main();
