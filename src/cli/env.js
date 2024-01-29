import process from "node:process";

const env = process.env;
// for tests only
//env.RSS_baz = "baz";
//env.RSS_foo = "foo";
//env.RSS_bar = "bar";
//env.RSS_foo_bar = "foo bar";
//env.PORT = 3000;
//env.qwerty = "qwerty";

const prefix = "RSS_";

const parseEnv = () => {
    // Write your code here 
    const GetRssEnvParams = (obj, pref) => Object.keys(obj).filter(item => item.toString().startsWith(pref));
    const rssEnvParams = GetRssEnvParams(env, prefix);
    let envString = "";
    rssEnvParams.forEach((item, index, arr) => {
        envString += item + "=" + env[item];
        if(index != arr.length - 1) envString += "; ";
    });
    console.log(envString);
};

parseEnv();