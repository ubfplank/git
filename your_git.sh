#!/bin/bash

# your_git.sh - Stage #GG4 do Codecrafters Git

# Função para inicializar o repositório
init_repo() {
    # Cria o diretório .git se não existir
    if [ ! -d ".git" ]; then
        mkdir -p .git
        echo "Initialized empty Git repository in $(pwd)/.git/"
    else
        echo "Repositório já inicializado"
    fi
}

# Função para adicionar arquivos (simulação mínima)
add_file() {
    if [ -z "$1" ]; then
        echo "Nothing specified, nothing added."
        return
    fi

    # Verifica se o arquivo existe
    if [ -f "$1" ]; then
        mkdir -p .git/index
        cp "$1" ".git/index/$(basename "$1")"
        echo "added $1"
    else
        echo "fatal: pathspec '$1' did not match any files"
    fi
}

# Main
case "$1" in
    init)
        init_repo
        ;;
    add)
        add_file "$2"
        ;;
    *)
        echo "Comando não reconhecido: $1"
        ;;
esac