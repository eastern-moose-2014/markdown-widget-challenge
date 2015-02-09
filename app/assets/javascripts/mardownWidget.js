
var MarkdownWidget = function(input, output) {
  this.input = input;
  this.output = output;

  // this.input = $("#textarea");

}

MarkdownWidget.prototype.createMarkdown = function() {
  // console.log(this.input)
var currentString = $(this.input).val();
var finalString = "";
var something = String.fromCharCode(event.keyCode);
  for (var i = 0; i < currentString.length; i++) {
    // modify string
    if (currentString[i] === "*") {
       finalString.push(i)

      } else {
        // console.log(currentString[i]);
        finalString = finalString.concat(currentString[i])
      }
  }

  $(this.output).text(finalString);


}

MarkdownWidget.prototype.display = function() {

}
