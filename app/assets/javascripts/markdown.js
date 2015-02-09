$(document).ready(function() {
  awesomeWidget = new MarkdownWidget("#source-id", "#preview-div");
  awesomeWidget.convertText();
  awesomeWidget.keyUp();
});
