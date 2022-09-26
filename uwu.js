function makeUWU() {
    window.document.querySelectorAll('a, p, h1, h2, h3, h4, h5, b, span').forEach((v, k) => {
        v.childNodes.forEach((n, k) => {
            if(n.nodeType == Node.TEXT_NODE)
            n.textContent = n.textContent.replace(/(r|l)/,"w");
            n.textContent = n.textContent.replace(/(R|L)/,"W");
        });
    });
}

makeUWU();
