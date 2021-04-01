document.getElementById("display").setAttribute("readonly", "true");
let displayVal = "0."
let workingMemory = 0;
let answer;
let opsQueue;
let lastOperand;
let decimal = ".";
function sign() {
    workingMemory = document.getElementById("display").value;
    displayVal = workingMemory * -1;
    document.getElementById("display").value = displayVal;
}
function setDisplay() {
    document.getElementById("display").value = displayVal;
}
function clearDisplay() {
    if ((workingMemory !== 0) && (displayVal != "0.")) {
        displayVal = "0.";
        document.getElementById("display").value = displayVal;
        console.log(workingMemory);
    } else {
        displayVal = "0.";
        document.getElementById("display").value = displayVal;
        workingMemory = 0;
        console.log(workingMemory);
        console.clear();
    }
}
function changeDisplay(x) {
    if (displayVal == "0.") {
        document.getElementById("display").value = x;
        displayVal = x;
    // } else if ((displayVal != "0.") && (answer != 0)){
    //     clearDisplay();
    //     document.getElementById("display").value = x;
    } else {
        document.getElementById("display").value = displayVal + String(x);
        displayVal += String(x);
    }
}
function operation(operator) {
    workingMemory = document.getElementById("display").value;
    displayVal = "0.";
    document.getElementById("display").value = displayVal;
    opsQueue = operator;
    lastOperand = displayVal;
}
function equals() {
    operand = document.getElementById("display").value;
    if (opsQueue == "addition") {
        answer = parseFloat(workingMemory) + parseFloat(operand);
    } else if (opsQueue == "subtraction") {
        answer = parseFloat(workingMemory) - parseFloat(operand);
    } else if (opsQueue == "multiplication") {
        answer = parseFloat(workingMemory) * parseFloat(operand);
    } else if (opsQueue == "division") {
        answer = parseFloat(workingMemory) / parseFloat(operand);
    } else if (opsQueue == "exponentiation") {
        answer = parseFloat(workingMemory) ** parseFloat(operand);
    }
    document.getElementById("display").value = answer;
}

const graphingCalculator = document.getElementById("graphingCalculator");
const graphingDisplay = document.getElementById("graphingDisplay");
let pixelIArray = [];
let pixelIdArray = [];
function genPixelArrayIds() {
    for (let i = 0; i < 64; i++) {
        for (let j = 0; j < 96; j++)
            pixelIdArray.push(String(i + 1) + "," + String(j + 1));
    }
}
genPixelArrayIds();

function renderGraphingDisplay() {
    for (let i = 0; i < 6144; i++) {
        graphingDisplay.appendChild(document.createElement("div"));
    }
    for (let j = 0; j < 6144; j++) {
        graphingDisplay.children[j].setAttribute("id", pixelIdArray[j]);
        graphingDisplay.children[j].setAttribute("class", "pixel-off");
        graphingDisplay.children[j].setAttribute("onclick", `changePixelColor('${pixelIdArray[j]}')`);
    }
}

function changePixelColor(x) {
    document.getElementById(x).classList.toggle("pixel-on");
}

console.log(document.body);
console.log(graphingDisplay);

const buttonArray = ["Yequals", "WINDOW", "ZOOM", "TRACE", "GRAPH", "SECOND", "MODE", "DEL", "ALPHA", "COMMONVARS", "STAT", "MATH", "APPS", "PRGM", "VARS", "CLEAR", "INVERSE", "SIN", "COS", "TAN", "EXP", "SQUARED", "COMMA", "LEFTPAR", "RIGHTPAR", "DIVIDE", "LOG", "SEVEN", "EIGHT", "NINE", "TIMES", "LN", "FOUR", "FIVE", "SIX", "MINUS", "STO", "ONE", "TWO", "THREE", "PLUS", "ON", "ZERO", "POINT", "NEGATIVE", "ENTER"]
const buttonArrayNames = ["Y=", "WINDOW", "ZOOM", "TRACE", "GRAPH", "2nd", "MODE", "DEL", "ALPHA", "X,T,\u0398,n", "STAT", "MATH", "APPS", "PRGM", "VARS", "CLEAR", "x^(-1)", "SIN", "COS", "TAN", "^", "x^2", ",", "(", ")", "/", "LOG", "7", "8", "9", "X", "LN", "4", "5", "6", "-", "STO➡️", "1", "2", "3", "+", "ON", "0", ".", "(-)", "ENTER"]
const buttons = graphingDisplay.childNodes
const buttonDiv = document.body.children[1];
function rendorCalculator() {
    renderGraphingDisplay();
    for (let i = 0; i < 46; i++) {
        graphingCalculator.appendChild(document.createElement("div"));
        graphingCalculator.children[i + 1].setAttribute("id", buttonArray[i]);
        document.getElementById(buttonArray[i]).appendChild(document.createElement("button"));
        buttonDiv.children[i + 1].children[0].innerText = buttonArrayNames[i];
    }
}
rendorCalculator();
