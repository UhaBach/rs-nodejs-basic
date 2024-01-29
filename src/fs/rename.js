import fs from "fs";

const fileName = "src/fs/files/wrongFilename.txt";
const changedFileName = "src/fs/files/properFilename.md";

const rename = async () => {
    // Write your code here 
    if(!fs.existsSync(fileName)) throw new Error("FS operation failed");
    if(fs.existsSync(changedFileName)) throw new Error("FS operation failed");
    fs.rename(fileName, changedFileName, (err) => {
        if(err) throw new Error(err.message);
    });
};

await rename();