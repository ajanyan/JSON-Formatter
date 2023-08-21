

document.addEventListener(
    "DOMContentLoaded",
    function () {
      chrome.runtime.sendMessage({ message: "jsonData" }, function (response) {
        if (response.data != undefined && response.data != "") {
         
            const formatted = JSON.stringify(
              JSON.parse(response.data),
              null,
              4
            );
            const readonlydiv = document.querySelector("#wrapper");
            readonlydiv.innerHTML  = formatted.replaceAll("\\n","<br>");
          
        }
      });
    },
    false
  );