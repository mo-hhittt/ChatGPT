const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ apiKey: "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"});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    return res.data.choices[0].text;
}