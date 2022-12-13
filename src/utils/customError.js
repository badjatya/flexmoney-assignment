const customError = (res, statusCode, message, status = "fail") => {
  res.status(statusCode).json({
    status,
    message,
  });
};

module.exports = customError;
