// PARA INCLUIR EL PRECIO
function cajaReservas() {
    for (const caja of reservas) {
        let ingresar = caja.ingresarDinero()
        alert("el total a pagar es: $" + ingresar)
        break
    }

}
