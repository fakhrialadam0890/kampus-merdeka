function plus(){
    let data = window.document.getElementById("aritmatika");
    let angka1 = data.fnumber.value;
    let angka2 = data.lnumber.value;

    validasifield(angka1, angka2);

    let hasil = Number(angka1) + Number(angka2);

    data.result.value = hasil;
}

function minus(){
    let data = window.document.getElementById("aritmatika");
    let angka1 = data.fnumber.value;
    let angka2 = data.lnumber.value;

    validasifield(angka1, angka2);

    let hasil = Number(angka1) - Number(angka2);

    data.result.value = hasil;
}
function times(){
    let data = window.document.getElementById("aritmatika");
    let angka1 = data.fnumber.value;
    let angka2 = data.lnumber.value;

    validasifield(angka1, angka2);

    let hasil = Number(angka1) * Number(angka2);

    data.result.value = hasil;
}
function divide(){
    let data = window.document.getElementById("aritmatika");
    let angka1 = data.fnumber.value;
    let angka2 = data.lnumber.value;

    validasifield(angka1, angka2);

    let hasil = Number(angka1) / Number(angka2);

    data.result.value = hasil;
}
function square(){
    let data = window.document.getElementById("aritmatika");
    let angka1 = data.fnumber.value;
    let angka2 = data.lnumber.value;

    validasifield(angka1, angka2);

    let hasil = Number(angka1) ** Number(angka2);

    data.result.value = hasil;
}

function validasifield(angka1, angka2){
    if (isNaN(angka1) || angka1 == '') {
        alert("Field must be a number and required!");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Field must be a number and required!");
    }
}

function kosongkan() {
    let data = window.document.getElementById("aritmatika");
    data.fnumber.value = "";
    data.lnumber.value = "";
    data.result.value = "";
}