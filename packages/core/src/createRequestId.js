import uuid from 'uuid/v4';

export default (req, _res, next) => {
  req.id = uuid();
  next();
};
