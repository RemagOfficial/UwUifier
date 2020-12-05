document.body.addEventListener('click', () => {
    document.getElementById('imageUWU').setAttribute('src','owo.png');
    chrome.tabs.executeScript({file: "uwu.js"});
});