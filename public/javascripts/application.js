$(function() {
  var faye = new Faye.Client('http://chat99.herokuapp.com/faye');
  faye.subscribe("/messages/new", function(data) {
    eval(data);
  });
});
