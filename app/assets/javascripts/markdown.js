function GetKeyUp() {
  $("textarea").keyup(function(e) {
    awesomeWidget.convertText(e);
  })
};

$(document).ready(function() {
  awesomeWidget = new MarkdownWidget("#source-id", "#preview-div");
  GetKeyUp();
});
