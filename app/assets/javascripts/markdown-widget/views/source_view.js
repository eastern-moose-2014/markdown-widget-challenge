MarkdownWidget.SourceView = function(selector, notificant) {
  this.$selector = $(selector);
  this.notificant = notificant;

  this.$selector.on('keyup', function(e) {
    this.emitKeyupEvent(e);
  }.bind(this));
}

MarkdownWidget.SourceView.prototype = {
  emitKeyupEvent: function(e) {
    var mdText = $(e.target).val();
    this.notificant.notifyOfKeyUp(mdText);
  }
}
