
var jsonData;



chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': 'popup.html'}, function(window) {
  });
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.message == "jsonData"){
      sendResponse({data: jsonData});
      jsonData = ""
    }
      
  }
);


chrome.contextMenus.create({
  id:"formatJSON",
  title: "Format JSON",
  contexts:["selection"],  // ContextType

 });


 chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "formatJSON") {
    jsonData = info.selectionText;
    chrome.tabs.create({'url': 'popup.html'}, function(window) {
    });
    
  }
});