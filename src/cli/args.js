import process from "node:process";

const argv = process.argv;

const parseArgs = () => {
    // Write your code here 
    let argsString = "";
    for(let i = 2; i < argv.length; i += 2){
        argsString += argv[i].substring(2) + " is " + argv[i + 1];
        if(i != argv.length - 2) argsString += ", ";
    }
    console.log(argsString);
};

parseArgs();