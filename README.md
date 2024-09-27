# chatGPT CLI

Simple ChatGPT integration for the MacOS terminal. Useful for simple queries without breaking terminal workflow.

Accepts multi-line input. Always end prompt with " --".

Setup:

Install package.

```
npm i -g chatgpt-cli-zsh
```

Add your OpenAI API key as a global environment variable in the terminal.

```
echo 'export OPENAI_API_KEY="your-api-key-here"' >> ~/.zshrc
```

Reload your terminal config.

```
source ~/.zshrc
```

Create an alias for the CLI so it starts up on 'chat'.

```
echo 'alias chat="node /path/to/main.js"' >> ~/.zshrc
```

Reload your terminal config.

```
source ~/.zshrc
```

OPTIONALLY: Change the default model on line 17 of main.js. The default model is 'ChatGPT3.5 turbo'.

```
model: 'gpt-3.5-turbo',
```
