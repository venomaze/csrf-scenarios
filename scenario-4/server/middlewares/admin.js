const isAdmin = (req, res, next) => {
  if (!req.session.admin) {
    return res.redirect('/');
  }

  return next();
};

module.exports = isAdmin;
