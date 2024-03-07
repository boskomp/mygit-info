const fetch = require("node-fetch");

const getUser = (username) =>
  new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });

module.exports = getUser;
