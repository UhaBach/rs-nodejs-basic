import fs from "fs";

const fileName = "src/fs/files/fileToRemove.txt";

const remove = async () => {
    // Write your code here 
    if(!fs.existsSync(fileName)) throw new Error("FS operation failed");
    fs.unlink(fileName, (err) => {
        if(err) throw new Error(err.message);
    });
};

await remove();