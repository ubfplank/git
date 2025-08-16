#!/bin/bash

# your_program.sh - Stage #GG4

# Verifica o argumento passado
if [ "$1" == "init" ]; then
    # Cria o diretório .git
    mkdir -p .git
    echo "Initialized empty Git repository in $(pwd)/.git/"
else
    echo "Comando não reconhecido: $1"
fi