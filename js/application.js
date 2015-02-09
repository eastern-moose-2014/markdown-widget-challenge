$(document).ready(function() {

  mkd = new MarkdownWidget();

  var $source = $('#source')

  $source.keyup(function() {
    var sourceText = $('#source-text').val();
    mkd.getText(sourceText);
    mkd.convertText(mkd.splitText());
    //convert the source to html to render
    //View.updateRendered(mkd.finalOutput)
  });

});


var View = {};

View.updateRendered = function (argument) {
// Out put of the markdown goes here.
  $("#preview").append("argument")
}


//Below is the model

function MarkdownWidget() {
  this.text = ""
}

MarkdownWidget.prototype.getText = function(string){
  this.text = string
}

MarkdownWidget.prototype.splitText = function(string) {
  return this.text.split("");
}

MarkdownWidget.prototype.convertText = function(textArray){
  var converted = []
  var openTag = true
  var join = textArray.forEach(function(letter, index) {
    if (letter === '*') {
      if (openTag === true) {
        converted.push("<em>")
        openTag = false
      } else {
        converted.push("</em>")
        openTag = true
      }
    }
    else if (letter === '_') {
      converted.push(index)
    }
    else {
      converted.push(letter)
    }
  })
  console.log(converted);
}

MarkdownWidget.prototype.updateView = function() {
  //take converted text in HTML form and update the view
}


