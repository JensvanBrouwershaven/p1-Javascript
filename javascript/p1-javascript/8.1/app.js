let p = document.getElementById("para")
const g1 = document.getElementById("getal1")
const g2 = document.getElementById("getal2")


function multiply(){
    p.innerText = `antwoord = ${g1.value * g2.value}`;;
}
function divide(){
    let divv = g1.value / g2.value;
    p.innerText = 'antwoord =' + divv;
}
function add(){
    const g1 = document.getElementById("getal1").value
    const g2 = document.getElementById("getal2").value

   test = Number(g1) + Number(g2)

    p.innerText = 'antwoord =' + test ;
}
function minus(){
    let minuss = g1.value - g2.value;
    p.innerText = 'antwoord =' + minuss
}
