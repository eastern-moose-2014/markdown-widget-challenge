function MarkdownWidget(source, preview) {
  this.source = source;
  this.preview = preview;
  this.newText = "AWESOME TEXT";
}

MarkdownWidget.prototype.convertText = function(e) {
  var sourceText = $(this.source).val();
  this.newText = sourceText;
  $(this.preview).html(this.newText);
}
