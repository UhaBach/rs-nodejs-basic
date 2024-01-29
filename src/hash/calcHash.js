import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
    // Write your code here 
    fs.readFile("src/hash/files/fileToCalculateHashFor.txt", (err, data) => {
        if(err) throw new Error(err.message);
        const hash = crypto.createHash("sha256").update(data).digest("hex");
        process.stdout.write(hash + "\n");
    });
};

await calculateHash();