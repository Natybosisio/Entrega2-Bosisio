
// alert("Usted puede reservar para la semana del 13 al 18 de junio de 2022");
/*Quiesiera una opción para que se actualice la fecha semana a semana, y 
en el futuro la idea es que sea con un calendario y hagan click sobre el dia */


function cargarDias() {
    diasHabilitados.innerHTML = ""
    for (const dia of semanaHabil) {
        const option = document.createElement("option")
        option.innerText = dia
        option.id = dia + "dia"
        diasHabilitados.append(option)
    }
}
cargarDias()


function cargarHorario() {
    horasHabilitadas.innerHTML = ""
    for (const hora of horariosDisponibles) {
        const option = document.createElement("option")
        option.innerText = hora
        option.id = hora + "horas"
        horasHabilitadas.append(option)
    }
}
cargarHorario()


//con esta funcion el usuario confirma la reserva y es cargada en mi array de reservas
function seleccionarReserva() {
    dia = diasHabilitados.value;
    hora = horasHabilitadas.value;
    nombre = nombreUsuario.value;
    dni = dniUsuario.value;
    

    if (nombre !== "" && dni !== "") {
        resultadoUs.innerHTML =
            "<tr>" +
            "<td>" + diasHabilitados.value + "</td>" +
            "<td>" + horasHabilitadas.value + "hs", "</td>" +
            "</tr>"

    }
    else {
        alert("Complete todos los datos solicitados.")
    }

}

function registrarReserva() {

    let nuevaReserva = new Reserva(dia, hora, nombre, dni)
    debugger
    reservas.push(nuevaReserva)

    confirmar()
    // cajaReservas()
}

//con esta funcion informo al usuario si fue reservada previamente
function compararReserva() {

    let existeReserva = buscarCoincidencia(dia, hora)

    if (existeReserva) {
        alert("Disculpa ese dia y horario ya esta reservado, vuelve a intentarlo")
    }
    else {
        registrarReserva()
    }
}

//Con esta funcion verificaremos si el dia y la hora dados por el usuario ya que sencuentran reservados.
function buscarCoincidencia(dia, hora) {
    let existeCita = false

    for (const citaAux of reservas) {
        debugger
        citaAux.informacion()
        existeCita = citaAux.verificarExistencia(dia, hora)
        if (existeCita) {
            break
        }
    }
    return existeCita
}


function confirmar() {
    let mostrarResultado = document.getElementById("mostrarResultado")
    mostrarResultado.innerHTML +=
        "<tr>" +
        "<td>" + "Para que su reserva quede confirmada debe abonar" + "</td>"
    "</tr>"
    let btnIr = document.createElement("button")
    btnIr.innerText = "ir a pago"
    btnIr.id = "btnIr"

    localStorage.setItem("reservas", JSON.stringify(reservas))
    console.log("Se agregó una reserva nueva.")

}




