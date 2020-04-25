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

        console.log = function(value) {
          console.oldLog(value);
          return value;
        };
        const output = eval(textContent);
        noderes.value = output;
        chrome.tabs.getSelected(null, function(tab) {
          alert(output);
        });
      },
      false
    );
  },
  false
);
