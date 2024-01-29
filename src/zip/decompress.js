import zlib from "zlib";
import stream from "stream";
import fs from "fs";

const filePath = "src/zip/files/archive.gz";
const destPath = "src/zip/files/fileToCompress.txt";

const decompress = async () => {
    // Write your code here 
    stream.pipeline(
        fs.createReadStream(filePath),
        zlib.createGunzip(),
        fs.createWriteStream(destPath),
        (err) => {
            if(err) throw new Error(err.message);
        }
    );
};

await decompress();