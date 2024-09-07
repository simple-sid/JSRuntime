
// runtime.js
((globalThis) => {
    const core = Deno.core;

    function argsToMessage(...args) {
        return args.map((arg) => JSON.stringify(arg)).join(" ");
    }
    const sarcasticPhrases = [
        "Oh, brilliant idea!", "wow, never heard that one before...", "Oh, how original...",
        "Congratulations, you broke the code!", "Great job, you found a bug!", "Keep up the good work, genius!",
        "Oh, the brilliance is blinding...", "I'm in awe of your coding skills...",
        "You must be a real expert...", "Such a groundbreaking contribution...",
        "You should be a comedian...", "Sarcasm level: expert...",
    ]; 

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0"); 
        const minutes = now.getMinutes().toString().padStart(2, "0"); 
        const seconds = now.getSeconds().toString().padStart(2, "0"); 
        return `${hours}:${minutes}:${seconds}`;
    }
    
    // const vars = Deno.env.toObject();
    // const isDebugEnabled = vars.DEBUG === "true";

    globalThis.console = {
        log: (...args) => {
            core.print(`[out]: ${argsToMessage(...args)}\n`, false);
        },
        sarcasm: (...args) => {
            const time = getCurrentTime();
            const sarcasticMessage = sarcasticPhrases[Math.floor(Math.random() * sarcasticPhrases.length)] 
            const message = argsToMessage(...args) + `\n\x1b[1m${sarcasticMessage}\x1b[0m`; 
            const logMessage = `\x1b[1;35m[${time}] [message]:\x1b[0m ${message}`;
            core.print(`${logMessage}\n`, true);
        },
        // warn: (...args) => {
        //     const time = getCurrentTime();
        //     const sarcasticMessage = sarcasticPhrases[Math.floor(Math.random() * sarcasticPhrases.length)] 
        //     const message = argsToMessage(...args) + `\x1b[0m\n\x1b[1m${sarcasticMessage}`;             
        //     const logMessage = `\x1b[1;36m[${time}] [warning]: \x1b[4;33m ${message}`;
        //     core.print(`${logMessage}\n`, true);
        // },
        // error: (...args) => {
        //     const time = getCurrentTime();
        //     const sarcasticMessage = sarcasticPhrases[Math.floor(Math.random() * sarcasticPhrases.length)] 
        //     const message = argsToMessage(...args) + `\n\x1b[1;37;41m${sarcasticMessage}\x1b[0m`;             
        //     const logMessage = `\x1b[1;32m[${time}] [error]: \x1b[3;31m${message}`;
        //     core.print(`${logMessage}\n`, true);
        // },
        // debug: (...args) => {
        //     if (isDebugEnabled) {
        //         const time = getCurrentTime();
        //         const message = argsToMessage(...args);
        //         const logMessage = `\x1b[36m[DEBUG] [${time}]:\x1b[0m ${message}`;
        //         core.print(`${logMessage}\n`, true);
            // }
        // },
    };
})(globalThis);