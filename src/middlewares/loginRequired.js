const loginRequired = (req, res, next) => {
  const token = req.get('authorization');
  const tokenLength = 16;
  if (!token) {
    return res.status(401).send({
        message: 'Token não encontrado',
      });
  }

  if (token.length !== tokenLength) {
    return res.status(401).send({
        message: 'Token inválido',
      });
  }

  next();
};

module.exports = loginRequired;