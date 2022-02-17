const Utils = {};

function json_send(res, data, message, status_code) {
  data = data || null;
  message = message || "";
  code = status_code || 200;

  const response = {
    code,
    message,
    data,
  };

  res.statusCode = status_code;
  if (process.env.ENVIRONMENT !== "test") {
  }
  return res.status(code).json(response);
}

Utils.jsonSuccess = (express_res, data, message, status_code) => {
  return json_send(express_res, data, message, status_code);
};

Utils.jsonFailure = (express_res, data, message, status_code = 400) => {
  return json_send(express_res, data, message, status_code);
};

module.exports = Utils;
