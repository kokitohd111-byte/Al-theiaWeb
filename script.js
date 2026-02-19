let modoOscuro = true;

const boton = document.getElementById("toggleModo");
const icono = document.getElementById("iconoModo");

boton.addEventListener("click", function() {

    modoOscuro = !modoOscuro;

    if (modoOscuro) {
        document.body.classList.remove("modo-claro");
        icono.src = "Luna.png";
    } else {
        document.body.classList.add("modo-claro");
        icono.src = "Sol.png";
    }

});
