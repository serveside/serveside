import { v4 as uuid } from 'uuid';

export default (req, _res, next) => {
  req.id = uuid();
  next();
};
