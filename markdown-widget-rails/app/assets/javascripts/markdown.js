$(document).ready(function() {

  $target = $('#text-box');
  $output = $('#output-div');

  $target.keyup(function(event) {
    var typedChar = String.fromCharCode(event.keyCode);
    console.log(typedChar);

    $output.children().last().append(typedChar);

  });

});
