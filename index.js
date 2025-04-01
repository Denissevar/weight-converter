// Buena suerte

//which inputs I need//

const inputPounds = document.querySelector(`#input`);
const spanKg = document.querySelector("result");
//* agregar evetn listener//

inputPounds.addEventListener("input", function (event) {
    const pounds = parseFloat(event.target.value);   

    //1 pound son 0.4
    // hay que multiplicar el valor de variable pounds por 0.4535

    if (!isNaN(pounds)) {
spanKg.textContent = "";
e = pounds * 0453592
    })
})

