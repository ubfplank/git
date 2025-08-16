#!/bin/bash

# Recebe o comando passado pelo CodeCrafters
COMMAND=$1

# Chama o seu script Node.js com esse comando
node app/main.js $COMMAND
git push origin main
