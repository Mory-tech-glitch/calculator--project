let display = document.getElementById('display');


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
function ClearDisplay() {
    display.value = '0'
    adjustFontSize();
}
function deleteLast() {
    display.value = display.value.slice(0, -1)  || '0';
    adjustFontSize();
}
function Calculate() {
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