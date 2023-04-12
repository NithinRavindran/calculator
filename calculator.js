function displaydata(n) {
    result.value += n;
}

function allclear() {
    result.value = "";
}

function del() {
    s = result.value;
    result.value = s.slice(0, -1);
}
function evaluateexpr() {
    result.value = eval(result.value);
}

function sqrroot(n) {
    result.value=math.sqrt(n)
}