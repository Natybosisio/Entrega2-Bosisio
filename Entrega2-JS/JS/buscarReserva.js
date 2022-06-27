
function verificarReservasUsuario() {

   let inputDni = document.getElementById("inputDni").value;

   let dniUsuario = inputDni
   let validado = validadDni(dniUsuario)
   if (validado == false) {
      alert("DEFINITIVAMENTE no es valido")
      return
   }

   //ESTE FOR ME BUSCA Y POR CADA UNO QUE NO COINCIDE ME TIRA EL NO TIENES RESERVAS Y A LO ULTIMO ME 
   for (let dniR of reservas) {

      if (dniR.reservaDni() == dniUsuario) {
         let resultadosPorId = document.getElementById("resultadosPorId");

         resultadosPorId.innerHTML +=
            "<tr>" +
            "<th scope=\"row\">" + dniR.reservaDni() + "</th>" +
            "<td>" + dniR.dia + "</td>" +
            "<td>" + dniR.hora + "</td>" +
            "<td>" + dniR.nombre + "</td>" +
            "</tr>"



      }
   }

}


function validadDni(dni) {
   let esDniValido = true
   if (dni.length < 7 || dni.length > 12) {
      alert("el DNI ingresado no es correcto")
      esDniValido = false
   }
   return esDniValido
}