const getIp = require('external-ip')();
const axios = require('axios');
const diskspace = require('diskspace');


getIp((err, ip) => {
    if (err) {
        console.log(err);
    }
    axios.put('http://213.219.102.10:3000/api/places/59f6d12f8c7858192d68eb4d', {
        ipAddress: ip
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(ip);
});

diskspace.check('C', function (err, result) {
    let diskSize = (result.total / 1000000000).toFixed(2);
    let diskFree = (result.free / 1000000000).toFixed(2);
    axios.put('http://213.219.102.10:3000/api/places/59f6d12f8c7858192d68eb4d', {
        diskSize: diskSize,
        diskFree: diskFree
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
});