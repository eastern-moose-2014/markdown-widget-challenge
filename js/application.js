$(document).ready(function() {

  mkd = new MarkdownWidget();

  var $source = $('#source')

  $source.keyup(function() {
    var sourceText = $('#source-text').val();
    mkd.getText(sourceText);
    var split = mkd.convertText(mkd.splitText());
    var viewString = mkd.updateView(split);
    console.log(split);
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
  var join = textArray.forEach(function(letter, i) {

    if (letter === '*' && textArray[i-1] === '*') {
      if (openBoldTag === true) {
        converted.push("<strong>")
        openBoldTag = false
        textArray[i-1] = " "
      }
      else {
        converted.push("</strong>")
        openBoldTag = true
        textArray[i-1] = " "
      }
    }
    else if (letter === '*' && textArray[i+1] !== '*' && textArray[i-1] !== '*') {
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


