exports.success = function (req, res, message, status) { //5)Function success
  res.status(status || 200).send({
    error: "",
    body: message
  });
};

exports.error = function (req, res, message, status, details) { //5) Function error
  console.error(`[response error] ${details}`);

  res.status(status || 500).send({
    error: message,
    body: ""
  });
};