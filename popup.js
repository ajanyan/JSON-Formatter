const inputArea = document.querySelector("#inputtextarea");
const outputArea = document.querySelector("#outputtextarea");
const btnFormat = document.querySelector("#formatbutton");
const btnMinify = document.querySelector("#minifybutton");
const btnAdvanced = document.querySelector("#advancedbutton");

document.addEventListener(
  "DOMContentLoaded",
  function () {
    chrome.runtime.sendMessage({ message: "jsonData" }, function (response) {
      if (response.data != undefined && response.data != "") {
        inputArea.value = response.data;
        try {
          const formatted = JSON.stringify(
            JSON.parse(inputArea.value),
            null,
            4
          );
          outputArea.value = formatted;
        } catch (e) {
          outputArea.value = e.message;
        }
      }
    });
  },
  false
);

btnFormat.addEventListener("click", () => {
  if (inputArea.value != "") {
    try {
      const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
      outputArea.value = formatted;
    } catch (e) {
      outputArea.value = e.message;
    }
  }
});

btnMinify.addEventListener("click", () => {
  if (inputArea.value != "") {
    try {
      const minified = JSON.stringify(JSON.parse(inputArea.value));
      outputArea.value = minified;
    } catch (e) {
      outputArea.value = e.message;
    }
  }
});

btnAdvanced.addEventListener("click", () => {
  if (inputArea.value != "") {
    try {
      chrome.tabs.create({'url': 'readonly.html?data='+inputArea.value}, function(window) {
      });
    } catch (e) {
      outputArea.value = e.message;
    }
  }
});

