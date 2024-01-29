import fs from "fs";

const srcDir = "src/fs/files/";
const destDir = "src/fs/files_copy/";

const copy = async () => {
    // Write your code here 
    if(!fs.existsSync(srcDir)) throw new Error("FS operation failed");
    if(fs.existsSync(destDir)) throw new Error("FS operation failed");
    fs.cp(srcDir, destDir, {recursive: true}, (err) => {
        if(err) throw new Error(err.message);
    });
};

await copy();