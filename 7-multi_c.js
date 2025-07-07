const count = parseInt(process.argv[2])
const word = "C is fun"
if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < count; i++) {
        console.log(word);

    }
}