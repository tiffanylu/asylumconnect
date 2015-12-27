"use strict";

var categories = [];
var filters = [];

var buttonClick = function (button, list) {
  $(button).click(function() {
    var item = $(this).attr('id');
    var index = jQuery.inArray('.' + item, list);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push('.' + item);
    }
    console.log(list);
    displayResources();
  });
};

var displayResources = function() {
  $('.resource').hide(); // hide all resources
  var toDisplay = $('.resource' + filters.join(''));
  if (categories.length > 0) {
    toDisplay = toDisplay.filter(categories.join(', '));
  }
  toDisplay.show(); // shows appropriate resources e.g., $('.resource.translation').filter('.dental-care, .hygiene')')
}

$(document).ready(function(){
  $('.resource-header').click(function() {
    $(this).next('.resource-content').toggle();
  });

  buttonClick('.btn-filter', filters);
  buttonClick('.btn-category', categories);
});