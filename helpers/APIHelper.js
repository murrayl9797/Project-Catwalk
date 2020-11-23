const axios = require('axios');

const getProductByID = (ID, callback) => {
  axios
    .get('http://3.21.164.220/products/', ID)
    .then((row) => {
      callback(null, row);
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports.getProductByID = getProductByID;
