const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Geocode = function (){
  this.data = null;
}

// listens for input
Geocode.prototype.bindEvents = function () {
  PubSub.subscribe('InputFormView:location-ready', (evt) => {
    console.log("GEOCODE GETS:",evt.detail[1]);
    const longLat = evt.detail[0];
    this.getLocationAndDate(evt.detail);
  });
};

// Geocode.prototype.getLocation = function (input) {
//   const url = `https://geocode.xyz/${input},region=UK?json=1`
//   console.log(url);
//   const request = new Request (url);
//   request.getAll((data)=>{
//     this.data = data;
//     console.log("GEOPAGE HELLO");
//     // PubSub.publish('DarkSky:weatherReady', this.data);
//   })

//gets location from api
Geocode.prototype.getLocationAndDate = function (locationAndDate) {
  console.log("Location is:",locationAndDate);
  const url = `http://localhost:8080/longlat/${locationAndDate[0]}`
  const request = new Request (url);
  request.get()
  .then((data)=>{
  const lat = parseFloat(data.items[0].lat);
  const long = parseFloat(data.items[0].long);
  const position = [lat,long];
  const date = locationAndDate[1];

  positionAndDate = [position, date];
  console.log("IT IS HERE:", positionAndDate);


  PubSub.publish('Geocode:location-ready', positionAndDate);
  })

};

module.exports = Geocode;
