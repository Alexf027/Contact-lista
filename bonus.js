let contacto1 = {
    id: 1143380418,
    nombres: "Carlos andres",
    apellidos: "Angulo Bautista",
    telefono: 3125418369,
    ubicaciones:{
      ciudad: "Cartagena",
      direccion: "Calle 11a #20-14"
    }
};
let contacto2 = {
  id: 1143895265,
  nombres: "Juancho",
  apellidos: "Gutierrez Zapata",
  telefono: 3205124637,
  ubicaciones:{
    ciudad: "Pasto",
    direccion: "Calle 30 #22-01"
  }
};
let contacto3 = {
  id: 1047859665,
  nombres: "Pacho",
  apellidos: "Guzman Palomino",
  telefono: 3156325487,
  ubicaciones:{
    ciudad: "Cucuta",
    direccion: "calle 2 #25-78"
  }
};
let listaContacto = [contacto1, contacto2, contacto3];
function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion){
  let contacto = {
    id,
    nombres,
    apellidos,
    telefono,
    ubicaciones:{
      ciudad,
      direccion
    }
  }
  listaContacto.push(contacto)
};
crearContacto()
function eliminarContacto(id){
  for (let i = 0; i < listaContacto.length; i++) {
    if(listaContacto[i].id === id){
      listaContacto.splice(i, 1);
    }
  }
};
console.log(listaContacto);
eliminarContacto();
console.log(listaContacto);

function actualizarContacto(id, nuevoNombres, nuevoApellidos, nuevoTelefono, nuevaCiudad, nuevaDireccion){
    for (let i = 0; i < listaContacto.length; i++) {
        if(listaContacto[i].id === id){
            listaContacto[i] = {
                id,
                nombre: nuevoNombres,
                apellidos: nuevoApellidos,
                telefono: nuevoTelefono,
                ubicaciones:{
                    ciudad: nuevaCiudad,
                    direccion: nuevaDireccion
                } 
            }
        }
    }
};
console.log(listaContacto);
actualizarContacto();