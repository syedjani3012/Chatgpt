import axios from "axios";
import { Parts } from "openai/resources/uploads/parts.mjs";
// const OpenAI = require('openai');

// const openai = new OpenAI({
//   apiKey: "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",
//   dangerouslyAllowBrowser: true
// });

// export async function sendMsgToOpenAI(message) {
//   const res = await openai.completions.create({
//     model: 'gpt-3.5-turbo',
//     prompt: message,
//     temperature: 0.7,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0
//   });
//   return res.choices[0].text; // Adjusted to get the correct content from response
// }

export async function sendMsgToOpenAI(message) {
        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyATo-AQmAIQ4kMQ3URDRa4W_n2s9Ja7YEE", // Replace with the correct URL
            method: "post",
            data: {
                contents:[{"parts":[{"text":message}]}],
            },
        });
    return response['data']['candidates'][0]['content']['parts'][0].text;
    }
