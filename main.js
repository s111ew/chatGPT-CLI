const readline = require('readline');
const axios = require('axios');
require('dotenv').config();

async function getChatGPTResponse(messages) {
  const apiKey = process.env.OPENAI_API_KEY;
  const url = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const data = {
    model: 'gpt-3.5-turbo',
    messages: messages,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = [
  { role: 'system', content: 'You are a helpful assistant.' }
];

