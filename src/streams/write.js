import readline from "readline";
import fs from "fs";

const filePath = "src/streams/files/fileToWrite.txt";

const write = async () => {
    // Write your code here 
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    const stream = fs.createWriteStream(filePath, { flags: "a+"});
    rl.on('line', (line) => {
        stream.write(line + "\n");
    });
};

await write();