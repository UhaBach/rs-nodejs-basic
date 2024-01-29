import fs from "fs";

const filePath = "src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";

const create = async () => {
    // Write your code here 
    fs.open(filePath, "wx", (err, fd) => {
        if (err){
            if (err.code === "EEXIST"){
                throw new Error("FS operation failed");
            }
        }
        fs.writeFile(filePath, fileContent, (err) => {
            if(err) throw new Error(err.message);
        });
    });
};

await create();