const fs = require('fs/promises');
const path = require('path');

const readFile = async () => {
  try {
    const pathFile = path.resolve('src', 'talker.json');
    const fileData = await fs.readFile(pathFile);
    return JSON.parse(fileData);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

module.exports = readFile;