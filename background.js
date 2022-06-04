let blackList = [...initBlackList];

function removeByValue(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}

function addBlackList(text) {
    if (!blackList.includes(text)) {
        blackList.push(text);
    }
}

function deleteBlackList(text) {
    if (blackList.includes(text)) {
        removeByValue(blackList, text);
    }
}

function getBlackList() {
    return blackList;
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "getBlackList")
            sendResponse({ blackList: getBlackList() });
        else
            sendResponse({}); // snub them.
    });