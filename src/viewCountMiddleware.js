function viewCountMiddleware(req, res, next) {
  req.session.count = req.session.count || 0;
  var n = req.session.count++;
  next();
}

module.exports = viewCountMiddleware;
