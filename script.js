let display = document.getElementById('display');
let memory=0;

function memoryadd() {
    memory +=parseFloat(display.value) || 0;
}
function memorysub() {
    memory -= parseFloat(display.value) || 0;
}
function memoryrecall() {
    display.value = memory;
    adjustFontSize();
}
function memoryclear() {
    memory = 0;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function sinfunction() {
    let num = parseFloat(display.value);
    display.value = Math.sin(toRadians(num));
    adjustFontSize();
}
function cosfunction() {
    let num = parseFloat(display.value);
    display.value = Math.cos(toRadians(num));
    adjustFontSize();
}
function tanfunction() {
    let num = parseFloat(display.value);
    display.value = Math.tan(toRadians(num));
    adjustFontSize();
}
function roundfunction() {
    let num = parseFloat(display.value);
    display.value = Math.round(num);
    adjustFontSize();
}

function appendValue(val) {
    if (display.value === '0') {
        display.value = val;
    } else {
        display.value += val;
    }
    adjustFontSize();
}
function percentage() {
    display.value = display.value /100;
    adjustFontSize();
}
function clearallclear() {
    display.value = '0'
    adjustFontSize();
}
function cleardelete() {
    display.value = display.value.slice(0, -1)  || '0';
    adjustFontSize();
}
function calculate() {
    try {
        let result = eval(display.value);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = 'error';
        } else {
            display.value = result;
        }
    } catch {
        display.value ='error';
    }
    adjustFontSize();
}
function adjustFontSize() {
    let length = display.value.length;

    if (length > '19') {
        display.style.fontSize = "25px";
} else if (length > '12') {
        display.style.fontSize = "35px";
} else if (length > '5') {
    display.style.fontSize = "45px";
} else {
    display.style.fontSize = "55px";
}
}
