'use strict';

const axios = require('axios');
const fs = require('fs');
const sensor = require('ds18x20');

let temperature = sensor.get('28-000005a0fa03');

axios.post('http://213.219.102.10:3000/api/temperatures/', {
    sensorId: '59f9e9048c7858192d68eb4e',
    temperature: temperature
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  temperature = sensor.get('28-000005a1496a');
  
  axios.post('http://213.219.102.10:3000/api/temperatures/', {
      sensorId: '59fae98a8c7858192d68eb64',
      temperature: temperature
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });