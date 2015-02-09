$(document).ready(function() {

  mkd = new MarkdownWidget();

  var $source = $('#source')

  $source.keyup(function() {
    var sourceText = $('#source-text').val();
    mkd.getText(sourceText);
    var split = mkd.convertText(mkd.splitText());
    var viewString = mkd.updateView(split);
    View.updateRendered(viewString);
    //convert the source to html to render
    //View.updateRendered(mkd.finalOutput)
  });

});


var View = {};

View.updateRendered = function(argument) {
  $("#preview").html(argument)
}



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
  var openBoldTag = true
  var openAsterikTag = true
  var openUnderscoreTag = true
  var join = textArray.forEach(function(letter, index) {
    // ** logic will be to check if the current letter is * and the previous letter is *
    // if (letter === '*' && letter[index-1] === '*') {
    //   if (openBoldTag === true) {
    //     converted.push("<strong>")
    //     openBoldTag = false
    //   }
    //   else {
    //     converted.push("</strong>")
    //     openBoldTag = true
    //   }
    // } else
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
  return(converted);
}

MarkdownWidget.prototype.updateView = function(convertedArray) {
  return (convertedArray.join(""));
}


