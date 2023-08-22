
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

chrome.runtime.onInstalled.addListener(() => {
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