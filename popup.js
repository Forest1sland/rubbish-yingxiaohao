const bg = chrome.extension.getBackgroundPage();
let currentBlackList = bg.getBlackList();

const blackListDom = document.getElementById("blackList");

document.getElementById('confirm').addEventListener("click", () => {
    const text = document.getElementById('name').value;
    if (text) {
        bg.addBlackList(text);
        blackListDom.innerHTML = `<p class="lead">${JSON.stringify(currentBlackList)}</p>`;
        document.getElementById("name").value = "";
    }
})

document.getElementById('delete').addEventListener("click", () => {
    const text = document.getElementById('del_name').value;
    if (text) {
        bg.deleteBlackList(text);
        blackListDom.innerHTML = `<p>${JSON.stringify(currentBlackList)}</p>`;
        document.getElementById("del_name").value = "";
    }
})

blackListDom.innerHTML = `<p>${JSON.stringify(currentBlackList)}</p>`;