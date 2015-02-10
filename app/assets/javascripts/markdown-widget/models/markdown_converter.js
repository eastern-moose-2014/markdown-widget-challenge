MarkdownWidget.MarkdownConverter = {
  convert: function(mdText) {
    return markdown.toHTML(mdText);
  }
}
