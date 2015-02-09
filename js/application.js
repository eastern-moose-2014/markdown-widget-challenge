$(document).ready(function() {

  var $source = $('#source')

  $source.keyup(function() {
    var x = $('#source-text').val();
    console.log(x);
    // var text =
    // mkd.getText(text)
  });

});


var View = {};

View.updateRendered = function (argument) {
// Out put of the markdown goes here.
  $("#preview").append("argument")
}


//Below is the model

function MarkdownWidget() {
  this.text = ''
}


MarkdownWidget.prototype.getText = function(string){
  this.text = string
}

MarkdownWidget.prototype.convertText = function(){
   //text from getText check against conversion conditions
}

MarkdownWidget.prototype.updateView = function() {
  //take converted text in HTML form and update the view
}


