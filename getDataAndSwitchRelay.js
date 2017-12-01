const raspi = require('raspi');
const gpio = require('raspi-gpio');
const axios = require('axios');

raspi.init(() => {
  
  const veetoru = new gpio.DigitalOutput('P1-16');
  
  axios.get('http://213.219.102.10:3000/api/relays/5a0718149950c405e96d2da9')
  .then(function (response) {
      if(!response) {
          throw new Error ('Cannot get data!');
      }
      const isOn = response.data.switchedOn;
      if(isOn) {
          veetoru.write(1);
          console.log('Turned on');
      } else {
          veetoru.write(0);
          console.log('Turned off');
      }
  })
  .catch(function (error) {
    console.log(error);
  });
});