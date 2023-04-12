function displaydata(n) {
    result.value += n;
}

function allclear() {
    result.value = "";
}

function evaluate() {
    resut.value=eval(result.value)
}

function del() {
    s = result.value;
    result.value = s.slice(0, -1);
}