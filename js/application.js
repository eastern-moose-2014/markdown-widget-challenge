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
  var openAsterikTag = true
  var openUnderscoreTag = true
  var join = textArray.forEach(function(letter, index) {
    if (letter === '*') {
      if (openAsterikTag === true) {
        converted.push("<em>")
        openAsterikTag = false
      } else {
        converted.push("</em>")
        openAsterikTag = true
      }
    }
    else if (letter === '_') {
      if (openUnderscoreTag === true) {
        converted.push("<em>")
        openUnderscoreTag = false
      } else {
        converted.push("</em>")
        openUnderscoreTag = true
      }
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


