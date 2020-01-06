const axios = require('axios');
const faker = require("faker");
const _ = require("lodash");

_.times(20, function () {
  return axios.post('http://localhost:3000/tasks', {
    label: faker.hacker.adjective(),
    done: faker.random.boolean(),
    important: faker.random.boolean(),
  }).then(resp => {
    console.log(resp.data);
  }).catch(error => {
    console.log(error);
  });
});


