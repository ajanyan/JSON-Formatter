
var jsonData;



chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': 'popup.html'}, function(window) {
  });
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.message == "jsonData"){
      jsonData1 = jsonData != null ? jsonData:jsonData1
      sendResponse({data: jsonData,data1:jsonData1});
      
      jsonData = ""
    }
      
  }
);


chrome.contextMenus.create({
  id:"formatJSON",
  title: "Format JSON",
  contexts:["selection"],  // ContextType

 });

 chrome.contextMenus.create({
  id:"beautifyJSON",
  title: "Format JSON Advanced (Read Only)",
  contexts:["selection"],  // ContextType

 });

 chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "formatJSON") {
    jsonData = info.selectionText;
    chrome.tabs.create({'url': 'popup.html'}, function(window) {
    });
    
  }

  if (info.menuItemId == "beautifyJSON") {
    jsonData = info.selectionText;
    chrome.tabs.create({'url': 'readonly.html'}, function(window) {
    });
    
  }
});