let temp = '';
let tempOp = '';
let result = '';
let toShow = '';
let a = '';
let b = '';

function showDisplay() {
    document.getElementById("display").innerHTML = toShow;
}

function button(btn) {
    temp += btn.value;
    toShow = temp;
    showDisplay()
}

function processPlus() {
    tempOp = 'plus';
    if (a === '') {
        a = +temp;
        temp = '';
        return;
    } else {
        b = +temp
        result = a + b;
        temp = '';
        a = result;
        b = '';
        toShow = result;
        showDisplay()
    }
}

function processMinus() {
    tempOp = 'minus';
    if (a === '') {
        a = +temp;
        temp = '';
        return;
    } else {
        b = +temp
        result = a - b;
        temp = '';
        a = result;
        b = '';
        toShow = result;
        showDisplay()
    }
}

function processMultiply() {
    tempOp = 'multiply';
    if (a === '') {
        a = +temp;
        temp = '';
        return;
    } else {
        b = +temp
        result = a * b;
        if (result === 0) {
            result = a;
            b = '';
        } else {
            temp = '';
            a = result;
            b = '';
            toShow = result;
            showDisplay()
        }
    }
}

function processDevide() {
    tempOp = 'devide';
    if (a === '') {
        a = +temp;
        temp = '';
        return;
    } else { // b === ''
        b = +temp
        result = a / b;
        if (!isFinite(result)) {
            result = a;
            b = '';
        } else {
            temp = '';
            a = result;
            b = '';
            toShow = result;
            showDisplay()
        }
    }
}

function equal() {
    if (b === '') {
        b = +temp;
        if (tempOp === 'plus') {
            result = a + b;
            a = result;
            b = '';
            toShow = result;
            showDisplay();
            temp = '';
        } else if (tempOp === 'minus') {
            result = a - b;
            a = result;
            b = '';
            toShow = result;
            showDisplay();
            temp = '';
        } else if (tempOp === 'multiply') {
            result = a * b;
            a = result;
            b = '';
            toShow = result;
            showDisplay();
            temp = '';
        } else if (tempOp === 'devide') {
            result = a / b;
            a = result;
            b = '';
            toShow = result;
            showDisplay();
            temp = '';
        } else {
            result = 'ERROR';
            toShow = result;
            showDisplay();
            temp = '';
        }
    } else {

    }
}

function reset() {
    temp = '';
    tempOp = '';
    result = '';
    toShow = '';
    a = '';
    b = '';
    showDisplay()
}