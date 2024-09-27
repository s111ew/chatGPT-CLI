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

function askQuestion() {
  console.log('\nPrompt:');

  let userInput = '';

  rl.on('line', (input) => {
    if (input.split(' ').pop() === '--') {
      input = input.replace('--', '');
      userInput += input + '\n'
      rl.removeAllListeners('line');
      processUserInput(userInput);
    } else {
      userInput += input + '\n';
    }
  }).on('close', () => {
    console.log('Ending...');
    process.exit(0);
  });
}

async function processUserInput(userInput) {
  userInput = userInput.trim();
  if (!userInput) {
    askQuestion();
    return;
  }

  messages.push({ role: 'user', content: userInput });

  const botResponse = await getChatGPTResponse(messages);

  console.log('\nChatGPT:\n', botResponse);

  messages.push({ role: 'assistant', content: botResponse });

  askQuestion();
}

function startChat() {
  console.log('ChatGPT CLI');
  console.log('Finish input with " --"');
  console.log('End chat with ctrl+D');
  askQuestion();
}

startChat();