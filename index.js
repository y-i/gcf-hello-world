if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const handleGET = (req, res) => {
  res.status(200).send('GET request');
};

const handlePUT = (req, res) => {
  res.status(200).send('PUT request');
};

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloGET = (req, res) => {
  /*
  res.send('Hello World!');
  */
  switch (req.method) {
    case 'GET':
      handleGET(req, res);
      break;
    case 'PUT':
      handlePUT(req, res);
      break;
    default:
      res.status(500).send({ error: 'Something blew up! ' + process.env.ERR_MSG });
      break;
  }
};
