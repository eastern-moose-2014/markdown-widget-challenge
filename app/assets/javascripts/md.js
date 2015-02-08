$( document ).ready(function() {
  // var markdownInput = document.getElementById('markdown-input');

  // markdownInput.onkeyup = function() {
  //   document.getElementById('preview-div').innerHTML = markdownInput.value;
  // }

  function Editor(input, preview) {
    this.update = function () {
      preview.innerHTML = markdown.toHTML(input.value);
    };
    input.editor = this;
    this.update();
  }
  var $ = function (id) { return document.getElementById(id); };
  new Editor($("markdown-input"), $("preview-div"));

});
