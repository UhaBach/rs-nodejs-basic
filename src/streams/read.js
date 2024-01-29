import fs from "fs";

const filePath = "src/streams/files/fileToRead.txt";

const read = async () => {
    // Write your code here 
    const stream = fs.createReadStream(filePath);
    stream.on("data", (chunk) =>{
        process.stdout.write(chunk);
    });
};

await read();