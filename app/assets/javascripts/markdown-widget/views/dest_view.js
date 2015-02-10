MarkdownWidget.DestView = function(selector, notificant) {
  this.$selector   = $(selector);
}

MarkdownWidget.DestView.prototype = {
  draw: function(htmlText) {
    this.$selector.html(htmlText);
  }
}
