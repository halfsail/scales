let amount = document.getElementById('amount')
let increment = document.getElementById('increment')
let size = document.getElementById('size')
let font = document.getElementById('font')
let height = document.getElementById('height')
let heightAmount = document.getElementById('heightAmount')
let fontSizes = []
let lineHeights = []
let info = []

function startup() {
    amount.value = 5;
    increment.value = 1.3;
    size.value = 14;
    font.value = 'system-ui';
    //lineHeight
    height.value = 1;
    heightAmount.value = .25;
}

function setFontSizes() {
    for (let i = 0; i < amount.value; i++) {
        let power = (i === 0 ? 1 : Math.pow(increment.value, i));
        fontSizes[i] = ( size.value * power ).toPrecision(2)
    }
    console.log(fontSizes)
}
function setLeading() {
    for (let i = 0; i < amount.value; i++) {
        let base = fontSizes[i] * height.value
        lineHeights[i] = base + (heightAmount.value * size.value)
    }
    console.log(lineHeights)
}
function setInfo() {
    for(let i = 0; i < amount.value; i++) {
        info[i] = fontSizes[i] + " / " + lineHeights[i].toPrecision(2) + " - " + font.value
    }
    console.log(info)
}
function getCss(index) {
    return "font:" + fontSizes[index] + "px/" + lineHeights[index] + "px " + font.value +"\;";
}
function genCode() {
    const parent = document.getElementById('right');
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    for (let i = 0; i < amount.value; i++) {
        var newType = document.createElement("div")
        var infoPar = document.createElement('p');
        var examplePar = document.createElement('p');
        var info_text = document.createTextNode(info[i])
        var example_text = document.createTextNode("Doing math should always mean finding patterns and crafting beautiful and meaningful explanations.")
        examplePar.setAttribute('style', getCss(i))
        examplePar.appendChild(example_text);
        infoPar.appendChild(info_text);
        newType.appendChild(infoPar);
        newType.appendChild(examplePar);
        document.getElementById('right').appendChild(newType)
    }
}
function setType() {
    setFontSizes();
    setLeading();
    setInfo();
    genCode();
}

startup();
setType();