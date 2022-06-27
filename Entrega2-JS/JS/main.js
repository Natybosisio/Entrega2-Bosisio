class Reserva {
    constructor(dia, hora, nombre, dni) {
        this.dia = dia;
        this.hora = hora;
        this.nombre = nombre;
        this.dni = dni;
        this.precio = 1200;
    }
    
    informacion() {
        console.table("dia [" + this.dia + "], hora[" + this.hora + "], nombre[" + this.nombre + "] dni[" + this.dni + "]" + "precio[" + this.precio + "]");
    }

    reservaDni() {
       return(this.dni)
    }

    verificarExistencia(dia, hora) {
        return (this.dia == dia && this.hora == hora)
    }
    ingresarDinero() {
        return (this.precio * 1)
    }
   
  }
 let dniR
 let dia
 let hora
 let nombre
 let dni

//ARRAYS
const reservas = []

const semanaHabil = ["lunes","martes","miercoles","jueves","viernes","sabado"]

const horariosDisponibles = ["08","09","10","11","12","13","14","15","16","17","18","19","20","21"]




//ESTO SIMULA LAS HORAS QUE YA ESTAN RESERVADAS PARA LOS PROFESORES, POR LO CUAL NO ESTAN DISPONIBLES
function agregarReservasOcupadas() {
    if (localStorage.getItem("reservas")) {
        let reservasCargadas = JSON.parse(localStorage.getItem("reservas"))
        for( let c=0 ; c<reservasCargadas.length; c++){
          let dia = reservasCargadas[c].dia
          let hora = reservasCargadas[c].hora
          let nombre = reservasCargadas[c].nombre
          let dni = reservasCargadas[c].dni
          
          let reserva = new Reserva(dia, hora, nombre, dni)
          reservas.push(reservasCargadas)
        }
    }
    else{
        reservas.push(new Reserva("lunes", 08, "profe martin", "33333333",))
        reservas.push(new Reserva("lunes", 09, "profe camila", "22222222"))
        reservas.push(new Reserva("martes", 08, "profe martin", "33333333"))
        reservas.push(new Reserva("martes", 09, "profe camila", "22222222"))
    
    }
   
}
agregarReservasOcupadas()


