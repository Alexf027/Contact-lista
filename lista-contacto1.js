let contactos = ["Carlos Angulo","Juancho Gutierrez","Pacho Guzman","Pepito Cadena"];
function agregarContacto(nombreApellido){
    contactos.unshift(nombreApellido);
}
agregarContacto("Lucho Diaz");
function eliminarContacto(nombreApellido) {
  const eliminar = contactos.indexOf(nombreApellido);
  if (eliminar !== -1) {
    contactos.pop(eliminar);
  }
}
eliminarContacto("Pepito Cadena");
function imprimirContactos() {
  contactos.forEach((contacto, i) => {
    console.log(`${i + 1}. ${contacto}`);
  });
}
imprimirContactos();



  
  
  
  
  
  