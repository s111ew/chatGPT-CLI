# chatGPT CLI

Simple ChatGPT integration for the MacOS terminal. Useful for simple queries without breaking terminal workflow.

Accepts multi-line input. Always end prompt with " --".

Add your OpenAI API key as a global environment variable in the terminal.

```
echo 'export OPENAI_API_KEY="your-api-key-here"' >> ~/.zshrc
```

Reload your terminal config.

```
source ~/.zshrc
```

OPTIONALLY: Create an alias for the CLI so it starts up on 'chat'.

```
echo 'alias chat="node /path/to/main.js"' >> ~/.zshrc
```

Reload your terminal config.

```
source ~/.zshrc
```
