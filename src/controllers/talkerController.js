const readFile = require('../utils/readFile');

const getAllTalkers = async (_req, res) => {
  const talkers = await readFile();

  res
    .status(200)
    .send(talkers);
};

const getTalkerById = async (req, res) => {
  const { id: paramsId } = req.params;
  const talkers = await readFile();
  const talker = talkers.find(({ id: talkerID }) => Number(paramsId) === talkerID);

  if (!talker) {
    return res
      .status(404)
      .json({
        message: 'Pessoa palestrante não encontrada',
      });
  }

  res
    .status(200)
    .json(talker);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
};