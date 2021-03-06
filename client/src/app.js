const DarkSky = require('./models/dark_sky.js');
const ResultView = require('./views/result_view.js');
const InputFormView = require('./views/input_form_view.js');
const Geocode = require('./models/geocode.js')
const FourSquare = require('./models/four_square.js');


document.addEventListener('DOMContentLoaded', ()=> {

const dateForm = document.querySelector('form');
const inputFormView = new InputFormView(dateForm);
inputFormView.bindEvents();

const geocode = new Geocode();
geocode.bindEvents();

const weather = document.querySelector('.modal')
const resultView = new ResultView(weather);
resultView.bindEvents();

const darkSky = new DarkSky();
darkSky.bindEvents();

const fourSquare = new FourSquare();
fourSquare.bindEvents();

})
