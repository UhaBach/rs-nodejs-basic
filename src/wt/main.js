import os from "os";
import { Worker, workerData  } from "worker_threads";

const threads = os.availableParallelism();
let outputArr = [];

const performCalculations = async () => {
    for(let i = 10; i < 10 + threads; i++){
        await startWorker(i).then(res => {
            outputArr.push({status: "resolved", data: res})
        }).catch(() => {
            outputArr.push({status: "rejected", data: null})
        })
    }
    console.log(outputArr);
};

const startWorker = (num) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/wt/worker.js', {
          workerData: num,
        });
        worker.on('message', (value) => resolve(value));
        worker.on('error', () => reject(null));
    });
}

await performCalculations();