
//ME CONECTO CON EL IMPUT DNI PARA BUSCAR RESERVAS
let btnConsultarDni = document.getElementById("btnConsultarDni")
btnConsultarDni.addEventListener("click", verificarReservasUsuario)

//ME CONECTO CON EL OPTION DIA Y HORA
const diasHabilitados = document.querySelector("#diasHabilitados")
const horasHabilitadas = document.querySelector("#horasHabilitadas")


//RELACIONO EL NOMBRE Y EL DNI 
const nombreUsuario = document.getElementById("nombre")
const dniUsuario = document.getElementById("dni")

//BOTON PARA ELEGIR LAS OPCIONES SELECCIONADAS X EL USUARIO
const btnElegir = document.getElementById("btnElegir")
btnElegir.addEventListener("click", seleccionarReserva)

//ACA GENERO SE CARGUEN LAS OPCIONES QUE ELIGIO EL USUARIO
const resultadoUs = document.querySelector("#resultadoUs")


//BOTON PARA CONFIRMAR LA RESERVA
const btnRegistrar = document.getElementById("btnRegistrar")
btnRegistrar.addEventListener("click", compararReserva)


