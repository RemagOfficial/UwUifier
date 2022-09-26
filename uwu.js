function makeUWU() {
    window.document.querySelectorAll('a, p, h1, h2, h3, h4, h5, b, span').forEach((v, k) => {
        v.childNodes.forEach((n, k) => {
            if(n.nodeType == Node.TEXT_NODE)
            n.textContent = n.textContent.replace(/(r|l)/,"w");
            n.textContent = n.textContent.replace(/(R|L)/,"W");
            n.textContent = n.textContent.replace(/(hi|hello)/,"hewwo");
            n.textContent = n.textContent.replace(/(Hi|Hello)/,"Hewwo");
            n.textContent = n.textContent.replace(/(father|dad)/,"daddy");
            n.textContent = n.textContent.replace(/(Father|Dad)/,"Daddy");
            n.textContent = n.textContent.replace(/(mom|mother)/,"mommy");
            n.textContent = n.textContent.replace(/(Mom|Mother)/,"Mommy");
        });
    });
}

makeUWU();
