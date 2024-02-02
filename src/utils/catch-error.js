const catchError = (fn) => (req, res, next) => {
  try {
    fn();
  } catch (err) {
    next(err);
  }
};

module.exports = catchError;



