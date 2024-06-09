export const logger = {
    info: async function (message: any) {
        let d = Date.now();
        let tick = new Date(d).toLocaleString("en-US", {
            minute: "2-digit",
            hour: "2-digit",
            hour12: false,
            timeZone: "MST",
        });
        let seconds = new Date(d).getSeconds().toString().padStart(2, "0");
        let milliseconds = Math.round(new Date(d).getMilliseconds() / 10)
            .toString()
            .padStart(2, "0");
        console.log(
            `INFO : ${tick}:${seconds}.${milliseconds} \x1b[42m  \x1b[0m ${JSON.stringify(
                message
            )}`
        );
    },
    warn: async function (message: any) {
        let d = Date.now();
        let tick = new Date(d).toLocaleString("en-US", {
            minute: "2-digit",
            hour: "2-digit",
            hour12: false,
            timeZone: "MST",
        });
        let seconds = new Date(d).getSeconds().toString().padStart(2, "0");
        let milliseconds = Math.round(new Date(d).getMilliseconds() / 10)
            .toString()
            .padStart(2, "0");
        console.log(
            `WARN : ${tick}:${seconds}.${milliseconds} \x1b[1;43m  \x1b[0m ${JSON.stringify(
                message
            )}`
        );
    },
    error: async function (message: any) {
        let d = Date.now();
        let tick = new Date(d).toLocaleString("en-US", {
            minute: "2-digit",
            hour: "2-digit",
            hour12: false,
            timeZone: "MST",
        });
        let seconds = new Date(d).getSeconds().toString().padStart(2, "0");
        let milliseconds = Math.round(new Date(d).getMilliseconds() / 10)
            .toString()
            .padStart(2, "0");
        console.log(
            `ERROR: ${tick}:${seconds}.${milliseconds} \x1b[41m  \x1b[0m ${JSON.stringify(
                message
            )}`
        );
    },
};
