const count = parseInt(process.argv[2])
const word = "x"

if (isNaN(count) | !count) {
    console.log("Missing size");
} else {
    for (let i = 0; i < count; i++) {
        console.log(word.repeat(count));
    }
}