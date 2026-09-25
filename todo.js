const process = require("process");
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

/**
 * @param { string } message - Todo message.
 * @returns { never }
 */
function todo(message = null) {
    Error.prepareStackTrace;
    let stack = Error().stack?.split("\n") || [];
    if (stack.length < 2) { throw Error(" > TODOERR: Callstack was too short to get data for <todo!>"); }
    let msg = stack[2].trim().replace("(", "").replace(")", "");
    const file = msg.match(/(?!.* ).*/g)[0].trim();
    const func = msg.match(/(?!.*\bat\b) .* /)[0].trim();
    console.log(`${RED} > [TODO] ${message ? message : ""} In Function: ${func}() | At: ${file}${RESET}`);
    process.exit(1);
}

module.exports = { todo };