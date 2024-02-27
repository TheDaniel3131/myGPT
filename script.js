// just type npm run dev in terminal
// this only works if there is ChatGPT Plus

import { config } from "dotenv";
import OpenAI from "openai";
import readline from "readline";

// run the config function to read the .env file
config();

// create a new instance of the OpenAI class
const openai = new OpenAI({ apiKey: process.env.CHATGPT_API_SECRET_KEY });

// create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// prompt the user for input
rl.question("Enter your message: ", (message) => {
    // call the create method on the completions endpoint
    openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "user", content: message }
        ]
    }).then(res => {
        console.log(res);
        res.choices.forEach(out => console.log(out.message));
        rl.close();
    });
});

// https://platform.openai.com/docs/quickstart?context=node
// too bad I don't pay ChatGPT plus so I can't get the end result