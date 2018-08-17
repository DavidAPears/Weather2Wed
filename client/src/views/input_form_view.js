const PubSub = require('../helpers/pub_sub.js');

const InputFormView = function (form){
  this.form = form;
};

InputFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);

  });
};

InputFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  console.log(evt.target.location.value);
  const newSearch = this.createSearch(evt.target);
  PubSub.publish('InputFormView:search-submitted', newSearch);
  evt.target.reset();
};

InputFormView.prototype.convertDateToSecondsSince1970 = function (form) {
  const dateSearched = form.date.value;
  const dateSearchedInSeconds = Date.parse(dateSearched) / 1000;
  return dateSearchedInSeconds;
};

InputFormView.prototype.createSearch = function (form) {

const secondsForUrl = this.convertDateToSecondsSince1970(form);

const newSearch = {
  location: form.location.value,
  date: secondsForUrl
}
console.log(newSearch);
return newSearch;
};

module.exports = InputFormView;