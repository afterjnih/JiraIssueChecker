// This is not supported on FireFox.
// chrome.runtime.onInstalled.addListener(onInit);

onInit();
window.setInterval(onInit, 4000);
function onInit(){
//  chrome.browserAction.setBadgeText({text: "1234"});
 chrome.browserAction.setBadgeText({text: (new Date()).getSeconds().toString()});
 console.log('timeout2');
} 
