const axios = require('axios');
let faker = require("faker");
let _ = require("lodash");

_.times(20, function () {
  return axios.post('http://localhost:3000/users', {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email()
  }).then(resp => {
    console.log(resp.data);
  }).catch(error => {
    console.log(error);
  });
});


