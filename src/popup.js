document.addEventListener(
  "DOMContentLoaded",
  function() {
    var checkPageButton = document.getElementById("clickIt");

    checkPageButton.addEventListener(
      "click",
      function() {
        var node = document.getElementById("text");
        var noderes = document.getElementById("result");
        var textContent = node.value;
        console.oldLog = console.log;
        const output = eval(textContent);
        noderes.value = output;
      },
      false
    );
  },
  false
);
