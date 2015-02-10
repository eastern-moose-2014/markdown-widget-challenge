MarkdownWidget.Controller = function() {
}

MarkdownWidget.Controller.prototype = {
  notifyOfKeyUp: function(mdText) {
    this.destinationView.draw(MarkdownWidget.MarkdownConverter.convert(mdText));
  }
}

