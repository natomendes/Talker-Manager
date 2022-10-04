const readFile = require('../utils/readFile');

const getAllTalkers = async (_req, res) => {
  const talkers = await readFile();

  res
    .status(200)
    .send(talkers);
};

module.exports = {
  getAllTalkers
}