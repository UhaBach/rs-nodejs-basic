import fs from "fs";

const fileName = "src/fs/files/fileToRead.txt";

const read = async () => {
    // Write your code here 

    fs.readFile(fileName, {encoding: "utf-8"}, (err, data) => {
        if(err){
            if(err.code === "ENOENT") throw new Error("FS operration failed");
            else throw new Error(err.message);
        }
        console.log(data);
    });
};

await read();