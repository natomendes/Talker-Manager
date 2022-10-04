const Str = require('@supercharge/strings');

const logUser = async (_req, res) => {
  const token = Str.random(16);

  res
    .status(200)
    .send({
      token,
    });
};

module.exports = {
  logUser,
};