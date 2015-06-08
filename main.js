'use strict';

$(document).ready(init);

function init(){
  $('#calculate').click(double);
}

function double(){
  console.log('entering function');
  var num = $('#integer').text();

  $('#display').empty();
  $('#display').append(num + num);
}
