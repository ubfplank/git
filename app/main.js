const fs = require("fs");
const path = require("path");

// Você pode usar console.error para debug
console.error("Logs from your program will appear aqui!");

const command = process.argv[2];

switch (command) {
  case "init":
    createGitDirectory();
    break;
  default:
    throw new Error(`Unknown command ${command}`);
}

function createGitDirectory() {
  // cria as pastas básicas do Git
  fs.mkdirSync(path.join(process.cwd(), ".git"), { recursive: true });
  fs.mkdirSync(path.join(process.cwd(), ".git", "objects"), { recursive: true });
  fs.mkdirSync(path.join(process.cwd(), ".git", "refs"), { recursive: true });

  // cria o arquivo HEAD que aponta para a branch principal
  fs.writeFileSync(
    path.join(process.cwd(), ".git", "HEAD"),
    "ref: refs/heads/main\n"
  );

  console.log("Initialized git directory");
}
