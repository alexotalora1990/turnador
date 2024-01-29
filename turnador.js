const contador = document.getElementById("contar");
const sumar = document.getElementById("incr");
const restar = document.getElementById("decr");
const reset = document.getElementById("reset");
const contenedorCita = document.getElementById("contenedorCitas");
let contadorCita = 1;

let numero = 0;
sumar.addEventListener("click", () => {
    if (contadorCita - 1 > numero) {
        numero++;
        contador.innerHTML = numero
    }
    else {
        botonAceptar.disabled = true;

    }
});
restar.addEventListener("click", () => {
    if (numero == 0) { }
    else {
        numero--;
        contador.innerHTML = numero;
    }

});
reset.addEventListener("click", () => {
    numero = 0;
    contador.innerHTML = numero;

    while (contenedorCita.firstChild) {
        contenedorCita.removeChild(contenedorCita.firstChild);
        contadorCita = 1
    }
});



document.getElementById("asignar").addEventListener("click", function () {
    let nuevaCita = document.createElement("div");
    nuevaCita.className = "card";

    let botonAceptar = document.createElement("button");
    botonAceptar.textContent = "✅";
    botonAceptar.addEventListener("click", () => {
        if (nuevaCita.classList.contains("rechazada")) {
            nuevaCita.classList.remove("rechazada");
        }

        nuevaCita.classList.toggle("aceptada");


    });

    let botonRechazar = document.createElement("button");
    botonRechazar.textContent = "❌";
    botonRechazar.classList.add=("botonRechazar");
    botonRechazar.addEventListener("click", () => {
        if (nuevaCita.classList.contains("aceptada")) {
            nuevaCita.classList.remove("aceptada");
        }

        nuevaCita.classList.toggle("rechazada");


    });
    mostrarTicket(nuevaCita.textContent);

    nuevaCita.textContent = "Cita " + contadorCita;



    nuevaCita.appendChild(botonAceptar);
    nuevaCita.appendChild(botonRechazar);
    contenedorCita.appendChild(nuevaCita);
    contadorCita++;

});

function mostrarTicket() {

    let mensaje = document.createElement("div");
    mensaje.className = "ticket";
    mensaje.textContent = "Cita  " + contadorCita + " asignada correctamente";
    document.getElementById("ticket").appendChild(mensaje);
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 3000);
}

