import {fork, spawn} from "child_process";
import process from "process";
import readline from "readline";

const command = "src/cp/files/script.js";

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = fork(command, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(process.argv.slice(2));