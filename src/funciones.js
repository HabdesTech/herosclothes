


//Esta sección sirve para crear el contador de productos
const cantidadProducto = document.getElementById("contador")
const incrementar = document.getElementById("plusCircle")
const reducir = document.getElementById("minusCircle")
let cantidad = 1

incrementar.addEventListener("click", () => {
    cantidad++
    modificarContador()
})
reducir.addEventListener("click", () => {
    cantidad--
    modificarContador()
})
modificarContador = () => {
    //Agregué una condicional IF para poder poner un limite al contador y que no se vuelva negativo
    if (cantidad >= 1) {
        cantidadProducto.textContent = cantidad
    } else {
        cantidad = 1
    }
}

//SECCION FORMULARIO
//datos_del_usuario
const nombreUsuario = document.getElementById("nombreUsuario");
const telefonoUsuario = document.getElementById("telefonoUsuario");
const dniUsuario = document.getElementById("dniUsuario");
const distritoUsuario = document.getElementById("distritoUsuario");
const direccionUsuario = document.getElementById("direccionUsuario");
const correoUsuario = document.getElementById("correoUsuario");
const metodoEntrega = document.getElementById("metodoEntrega");
const btnEnviar = document.getElementById("btnEnviarDatos");
//datos_del_producto
const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
var urlProducto = window.location

//datos_del_delivery
let distritosCercanos = ["Barranco", "Chorrillos", "Lurín", "Miraflores", "Pachacamac", "Pueblo Libre", "San Borja", "San Isidro", "San Juan de Miraflores", "San Luis", "Santiago de Surco", "Surquillo", "Villa El Salvador", "Villa María del Triunfo"]
let distritosMedianos = ["Ate", "Breña", "Independencia", "Jesús María", "La Molina", "La Victoria", "Lima", "Lince", "Magdalena del Mar", "Punta Hermosa", "Punta Negra", "San Juan de Lurigancho", "San Miguel", "Santa Anita", "Santa María del Mar"]
let distritosLejanos = ["Ancón", "Carabayllo", "Chaclacayo", "Cieneguilla", "Comas", "El Agustino", "Los Olivos", "Lurigancho", "Pucusana", "Puente Piedra", "Rímac", "San Bartolo", "San Martín de Porres", "Santa Rosa"]
var precioDelivery = "";

//metodos_de_pago
const metodoPago = document.getElementById("metodoPago")
var formaPago;
var precioTotal;
//otros
const btnCerrarFormulario = document.getElementById("btnCerrarFormulario")


btnEnviar.addEventListener("click", () => {
    //Con esta condicional se puede determinar que distrito eligió el usuario y determinar el precio de envio
    if (metodoEntrega.value == "Recojo en local") {
        precioDelivery = 0
    } else {
        for (var i = 0; i < distritosCercanos.length; i++) {
            if (distritoUsuario.value == distritosCercanos[i]) {
                precioDelivery = 5
            } else if (distritoUsuario.value == distritosMedianos[i]) {
                precioDelivery = 10
            } else if (distritoUsuario.value == distritosLejanos[i]) {
                precioDelivery = 15
            } else {
                "No aplica envío"
            }
        }
    }
    //Con esta condicional se puede determinar el método de pago y mostrar la información solicitada
    if (metodoPago.value == "Transferencia interbancaria") {
        formaPago = "Transferencia bancaria" + " " + 2003151735911
    } else if (metodoPago.value == "Yape") {
        formaPago = "Yapea" + " -> " + 993722873
    } else if (metodoPago.value == "Plin") {
        formaPago = "Plinea" + " -> " + 993722873
    } else if (metodoPago.value == "tunki") {
        formaPago = "Tunkea" + " -> " + 993722873
    } else {
        "No aplica"
    }
    //Con esta operación realizamos la operación aritmética para calcular el precio total del pedido. Se usa el "parseInt" para convertir los datos en números
    precioTotal = (parseInt(precioProducto.textContent) * parseInt(cantidadProducto.textContent) + precioDelivery);


    window.open(`https://api.whatsapp.com/send/?phone=51960995232&text=%F0%9F%91%8B+Hola%21+Acabo+de+realizar+el+siguiente+pedido+en+https://digital.habdes.pe/%3A%0A%0A%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BBDATOS+DEL+CLIENTE%3A%0AMi+nombre+es%3A+${nombreUsuario.value}%0AMi+DNI+es%3A+${dniUsuario.value}%0AMi+Teléfono+es%3A+${telefonoUsuario.value}%0AMi+Distrito+es%3A+${distritoUsuario.value}%0AMi+dirección+en%3A+${direccionUsuario.value}%0AMi+correo+electrónico+es%3A+${correoUsuario.value}%0AMétodo+de+entrega%3A+${metodoEntrega.value}%0A%0A%F0%9F%93%A6+DETALLE+DEL+PEDIDO%3A%0ALink+del+producto%3A+${urlProducto}%0ANombre+del+producto%3A+${nombreProducto.textContent}%0ACantidad%3A+${cantidadProducto.textContent}%0ASubtotal%3A+S/.+${precioProducto.textContent}%0AEnvío%3A+S/.+${precioDelivery}%0ATotal%3A+S/.+${precioTotal}%0A%0A%F0%9F%92%B3+MÉTODO+DE+PAGO%3A%0AMétodo+de+pago+solicitado%3A+${formaPago}`, '_blank')
    cierreVentana()
})
//Esta función cerrará la ventana del formulario
function cierreVentana() {
    btnCerrarFormulario.click()
    swal("Tu pedido se generó exitosamente", "Gracias por comprar con nosotros", "success");
}



// %F0%9F%91%8B%+Hola%21+Acabo+de+realizar+el+siguiente+pedido+en+https://digital.habdes.pe/%3A%0A%0A
// DATOS+DEL+CLIENTE%3A%0A
// Mi+nombre+es%3A+${nombreUsuario.value}%0A
// Mi+DNI+es%3A+${dniUsuario.value}%0A
// Mi+Teléfono+es%3A+${telefonoUsuario.value}%0A
// Mi+Distrito+es%3A+${distritoUsuario.value}%0A
// Mi+dirección+en%3A+${direccionUsuario.value}%0A
// Mi+correo+electrónico+es%3A+${correoUsuario.value}%0A
// Método+de+entrega%3A+${metodoEntrega.value}%0A%0A
// DETALLE+DEL+PEDIDO%3A%0A
// Link+del+producto%3A+${urlProducto}%0A
// Nombre+del+producto%3A+${nombreProducto.textContent}%0A
// Cantidad%3A+${cantidadProducto.textContent}%0A
// Subtotal%3A+S/.+${precioProducto.textContent}%0A
// Envío%3A+S/.+${precioDelivery}%0A
// Total%3A+S/.+${precioTotal}%0A%0A
// MÉTODO+DE+PAGO%3A%0A
// Método+de+pago+solicitado%3A+${formaPago}



