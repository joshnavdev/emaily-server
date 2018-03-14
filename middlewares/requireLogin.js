module.exports = (req, res, next) => {
  if(!req.user) {
    return res.status(401).send({ errod: 'You must login in!' });
  }

  next();
}
