const isNameInvalid = (name) => {
  const minNameLength = 3;
  if (!name) {
    return {
      message: 'O campo "name" é obrigatório',
    };
  }
  
  if (name.length < minNameLength) {
    return {
      message: 'O "name" deve ter pelo menos 3 caracteres',
    };
  }
  
  return false;
};

const isAgeInvalid = (age) => {
  const minAge = 18;
  if (!age) {
    return {
      message: 'O campo "age" é obrigatório',
    };
  }

  if (Number(age) < minAge) {
    return {
      message: 'A pessoa palestrante deve ser maior de idade',
    };
  }

  return false;
};

const isWatchedAtInvalid = (date) => {
  const regex = new RegExp('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$');
  if (!date) {
    return {
      message: 'O campo "watchedAt" é obrigatório',
    };
  }

  if (!regex.test(date)) {
    return {
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    };
  } 

  return false;
};

const isRateInvalid = (rate) => {
  if (!rate) {
    return {
      message: 'O campo "rate" é obrigatório',
    };
  }

  if (Number(rate) < 0 || Number(rate) > 5) {
    return {
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    };
  }
};

const isTalkInvalid = (talk) => {
  if (!talk) {
    return {
      message: 'O campo "talk" é obrigatório',
    };
  }
  const { watchedAt, rate } = talk;

  if (isWatchedAtInvalid(watchedAt)) return isWatchedAtInvalid(watchedAt);

  if (isRateInvalid(rate)) return isRateInvalid(rate);

  return false;
};

const validateTalker = (req, res, next) => {
  const { name, age, talk } = req.body;  

  if (isNameInvalid(name)) return res.status(400).send(isNameInvalid(name));

  if (isAgeInvalid(age)) return res.status(400).send(isAgeInvalid(age));

  if (isTalkInvalid(talk)) return res.status(400).send(isTalkInvalid(talk));

  next();
};

module.exports = validateTalker;