function getFlagEmoji(code) {
    return code.toUpperCase.split('')
    .map(c => String.fromCodePoint(127397 +c.charcodeAt()))
    .join('');
}


function showFlag() {
    let code = document.getElementById('countrycode').value;
    let flag = getFlagEmoji(code);
    document.getElementById('flag').textContent = "flag: " + flag;
}