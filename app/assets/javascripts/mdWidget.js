function Mark(){
  this.plainText = "";
  this.plainHTML = "";
  this.tagStart = {"<strong>" :/\*{2}/, "<em>" :/\*{1}/};
  this.tagEnd = {"</strong>" :/\*{2}/}, "</em>" :/\*{1}/};
};

function MarkView(source, preview) {
  this.$source = $(source);
  this.$preview = $(preview);
};

function MarkPresenter(source, preview) {
  this.source = source;
  this.preview = preview;
  this.typedText = "awesometext";
  this.convertedText = "awesomtext";
};

Mark.prototype = {
  setUp: function(etc){
    this.plainText = etc;
    this.plainHTML = etc;
  }
}

MarkPresenter.prototype.tagBegin = function(){
  var expStart = this.tagStart;
  for(var i in expStart) {
    this.plainHTML = this.plainHTML.replace(expStart[i], i);
  };
};

MarkPresenter.prototype.tagEnd = function(){
  var expEnd = this.tagEnd;
  for(var i in expEnd) {
    this.plainHTML = this.plainHTML.replace(expEnd[i], i);
  };
};

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
