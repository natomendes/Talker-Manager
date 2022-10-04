const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

const id = {
  value: 5,
};

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

const addTalker = async (req, res) => {
  const talkers = await readFile();
  const newTalker = {
    id: id.value,
    ...req.body,
  };
  await writeFile([
    ...talkers,
    newTalker,
  ]);
  id.value += 1;

  res.status(201).send(newTalker);
};

module.exports = {
  getAllTalkers,
  getTalkerById,
  addTalker,
};