document.body.addEventListener('click', () => {
    document.getElementById('imageUWU').setAttribute('src','owo.png');
    browser.tabs.executeScript({file: "uwu.js"});
})