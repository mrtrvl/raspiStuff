const axios = require('axios');

axios.get('http://213.219.102.10:3000/api/relays/5a0718149950c405e96d2da9')
  .then(function (response) {
    console.log(response.data.switchedOn);
  })
  .catch(function (error) {
    console.log(error);
  });
