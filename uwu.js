function makeUWU() {
    window.document.querySelectorAll('a, p, h1, h2, h3, h4, h5, b, span').forEach((v, k) => {
        v.childNodes.forEach((n, k) => {
            if(n.nodeType == Node.TEXT_NODE)
            n.textContent = n.textContent.replace(/(r|l)/g,"w");
            n.textContent = n.textContent.replace(/(R|L)/g,"W");
            n.textContent = n.textContent.replace(/(hi|hello)/g,"hewwo");
            n.textContent = n.textContent.replace(/(Hi|Hello)/g,"Hewwo");
            n.textContent = n.textContent.replace(/father/g,"daddy");
            n.textContent = n.textContent.replace(/Father/g,"Daddy");
            n.textContent = n.textContent.replace(/mother/g,"mommy");
            n.textContent = n.textContent.replace(/Mother/g,"Mommy");
        });
    });
}

makeUWU();
