// $(document).ready(function() {

//   $("textarea").keyup(function(event) {
//     // console.log(event);
//     // console.log(event.keyCode);
//       var currentString = $("textarea").val();
//       var finalString = "";
//       var something = String.fromCharCode(event.keyCode);
//       for (var i = 0; i < currentString.length; i++) {
//         // modify string
//         if (currentString[i] === "*") {
//           finalString.push(i)

//         } else {
//           // console.log(currentString[i]);
//           finalString = finalString.concat(currentString[i])
//         }
//     }

//     $("#print-area").text(finalString);

//   })

// });
    // $("#print-area").children().last().append(something);


    //////////////////////////////////////////////////

$(document).ready(function() {
  widget = new MarkdownWidget("#text-input", "#print-area");
  setEventHandlers();

})


function setEventHandlers() {
  $("textarea").keyup(function(event) {
    widget.createMarkdown();
  })
};
