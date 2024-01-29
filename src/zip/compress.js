import zlib from "zlib";
import stream from "stream";
import fs from "fs";

const filePath = "src/zip/files/fileToCompress.txt";
const destPath = "src/zip/files/archive.gz";

const compress = async () => {
    // Write your code here 
    stream.pipeline(
        fs.createReadStream(filePath),
        zlib.createGzip(),
        fs.createWriteStream(destPath),
        (err) => {
            if(err) throw new Error(err.message);
        }
    );
};

await compress();