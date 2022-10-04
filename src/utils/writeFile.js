const fs = require('fs/promises');
const path = require('path');

const writeFile = async (file) => {
  try {
    const pathFile = path.resolve('src', 'talker.json');
    await fs.writeFile(pathFile, JSON.stringify(file));
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

module.exports = writeFile;