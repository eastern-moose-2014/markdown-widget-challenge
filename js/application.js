function hello () {
  console.log("hello world")
}

$(document).ready(function() {

  // Mousetrap.bind('keyup')
  $('#source').keyup(function() {
    console.log("key up working")
  });

});
