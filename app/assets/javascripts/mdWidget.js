function MarkdownWidget(source, preview) {
  this.source = source;
  this.preview = preview;
  this.newText = "AWESOME TEXT";
}

MarkdownWidget.prototype.convertText = function() {
  var sourceText = $(this.source).val();
  this.newText = sourceText;
  $(this.preview).html(this.newText);
}

MarkdownWidget.prototype.keyUp = function() {
  $(window).on("keyup", function() {
    awesomeWidget.convertText();
  });
};
