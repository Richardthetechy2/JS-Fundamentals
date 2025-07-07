const arg = (process.argv[2]);
let num = parseInt(arg)
if (!isNaN(num)) {
    console.log(`My number: ${arg}`);
} else {
    console.log("Not a number");
}