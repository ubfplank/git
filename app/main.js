#!/usr/bin/env node

const fs = require('fs');

// captura o comando passado na linha de comando
const command = process.argv[2];

if (!command) {
    console.log('Please provide a command (e.g., init)');
    process.exit(1);
}

// implementa o comando 'init'
if (command === 'init') {
    try {
        // cria o diretório .git se não existir
        if (!fs.existsSync('.git')) {
            fs.mkdirSync('.git');
            console.log('Initialized empty Git repository in .git/');
        } else {
            console.log('.git already exists');
        }
    } catch (err) {
        console.error('Error creating .git directory:', err);
    }
} else {
    console.log(`Command "${command}" not recognized`);
}


