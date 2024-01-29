import fs from "fs";

const srcDir = "src/fs/files/";

const list = async () => {
    // Write your code here 
    if(!fs.existsSync(srcDir)) throw new Error("FS operation failed");
    fs.readdir(srcDir, (err, files) => {
        if(err) throw new Error(err.message);
        files.forEach((file) => {
            console.log(file);
        });
    });
};

await list();