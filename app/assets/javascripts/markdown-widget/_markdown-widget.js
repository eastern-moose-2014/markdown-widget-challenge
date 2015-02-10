MarkdownWidget = function(sel1, sel2) {
  var controller = new MarkdownWidget.Controller();
  var sourceView = new MarkdownWidget.SourceView(sel1, controller);
  controller.destinationView = new MarkdownWidget.DestView(sel2);
}
