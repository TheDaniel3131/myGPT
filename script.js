// just type npm run dev in terminal
// this only works if there is ChatGPT Plus

import { config } from "dotenv";
import OpenAI from "openai";

// run the config function to read the .env file
config();

// create a new instance of  the OpenAI class
const openai = new OpenAI( { apiKey: process.env.CHATGPT_API_SECRET_KEY } );

// call the create method on the completions endpoint
openai.chat.completions.create({ 
    model: "gpt-3.5-turbo",
    messages: [
        { role: "user", content: "Hello ChatGPT" }
    ]
}).then(res => {
    console.log(res)
    res.choices.forEach( out => console.log(out.message) );
});


// https://platform.openai.com/docs/quickstart?context=node
// too bad I don't pay ChatGPT plus so I can't get the end result