$(document).ready(function() {

  $('#source').keyup(function() {
    //this is the controller
  });

});


var View = {};

View.updateRendered = function (argument) {
// Out put of the markdown goes here.
  $("#preview").append("argument")
}

function MarkdownWidget() {
  this.text = ""
}

MarkdownWidget.prototype.getText = function(){
  return //text from source
}

MarkdownWidget.prototype.convertText = function(){
   //text from getText check against conversion conditions
}

MarkdownWidget.prototype.updateView = function() {
  //take converted text in HTML form and update the view
}


