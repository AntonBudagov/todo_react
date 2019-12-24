module.exports = function () {
  let faker = require("faker");
  let _ = require("lodash");
  return {
    tasks: _.times(1, function (n) {
      return {
        id: n,
        label: faker.hacker.adjective(),
        done: faker.random.boolean(),
        important: faker.random.boolean(),
      }
    })
  }
}