
let nul = 0;
function plus() {
    let text = document.getElementById("h1");

  
    if(nul >= 10){

        nul = 0;
        text.innerText = nul;
       
    } else {
        nul= nul + 1;
        text.innerText = nul;
    }
   
}
