import {Transform} from "stream";

const transform = async () => {
    // Write your code here 
    const tr = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split("").reverse().join("") + "\n");
            callback();
        }
    });
    process.stdin.pipe(tr).pipe(process.stdout);
};

await transform();