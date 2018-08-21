const PubSub = require('../helpers/pub_sub.js');

const InputFormView = function (form){
  this.form = form;
};

// listens for a submit on the form
InputFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
    console.log(evt.target.outerText);
    //require result_view
    //
  });
};

// refreshes the form and publishes the input searched
InputFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const location = evt.target.location.value;
  PubSub.publish('InputFormView:location-ready', location);
  this.convertDateToSecondsSince1970(evt.target);

//  evt.target.reset();
};

// changes date into seconds since epoch time
InputFormView.prototype.convertDateToSecondsSince1970 = function (form) {
  const newYearsDay2019 = 1483228800;
  console.log("THIS METHOD IS DOING SOMETHING");
  const dateSearched = form.range.valueAsNumber + newYearsDay2019; // time in seconds since 1970
  console.log("Published Date:", dateSearched);
  PubSub.publish('InputFormView:date-ready', dateSearched);

};

InputFormView.prototype.createSearch = function (form) {
  console.log("Input Date IS:", form);
this.convertDateToSecondsSince1970(form);
};









module.exports = InputFormView;
