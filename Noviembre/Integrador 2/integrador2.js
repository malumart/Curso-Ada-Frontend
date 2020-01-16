let listaUsuarios = [
[0, "Carla", "1545628984", "carla@gmail.com"],
[1, "Pedro", "1545251245", "pedro@gmail.com"],
[2, "Lucas", "1523357849", "lucas@gmail.com"],
[3, "Ana", "15789456", "ana@gmail.com"], 
];

let id = listaUsuarios.length;
let nombre = [];
let telefono = [];
let email = [];
let accion;
let volverAlMenuPrincipal = "SI";

while (volverAlMenuPrincipal == "SI"){
accion = prompt(`✅ Seleccione una operacion 
--------------------------
➡️ [AGREGAR] un usuario 👤
➡️ [OBTENER] un usuario 🔎
➡️ [LISTAR] todos los usuarios 📄
➡️ [MODIFICAR] un usuario 📝
➡️ [ELIMINAR] un usuario ❌ 
➡️ [SALIR] del programa 👋`);

if (accion == "AGREGAR"){   
    let repetirOperacion = "SI";

    while (repetirOperacion == 'SI'){
    nombre= prompt(" 📓 Ingrese el nombre del usuario");
    telefono= prompt(" 📞 Ingrese el teléfono del usuario");
    email = prompt(" 📫 Ingrese email del usuario");
    let nuevoUsuario =[id, nombre, telefono, email];

    let respuesta = prompt(`Los datos del usuario ingresado son:
    NOMBRE: ${name} 
    TELEFONO: ${telephone} 
    EMAIL: ${email}
    Desea confirmar?`);

    if (respuesta =="SI"){
        usuarios.push(nuevoUsuario);
        alert("El usuario fue guardado exitosamente!")
    }else{
        alert("Los cambios no han sido guardados, se cancelo la operacion.");
    }

    repetirOperacion = prompt(`Desea ingresar otro usuario?`);
    }

}

if (accion == "OBTENER") {

    let repetirOperacion = "SI";
    let usuarioEncontrado = false;
    while (repetirOperacion == 'SI'){
    let tipoDeDato = prompt(`Buscar por ID, Nombre, Celular o Email?`);
    let valorABuscar = prompt(`Ingresar el valor a buscar`);

    if (tipoDeDato == "ID" || "Nombre" || "Celular" || "Email") {
        for (let i = 0; i < listaUsuarios.length; i++) {
            for (let j = 0; j < listaUsuarios[i].length; j++) {
                if (listaUsuarios[i][j] === valorABuscar) {
                    alert(`El usuario encontrado es el siguiente:
                ${listaUsuarios[i]}`)
                usuarioEncontrado = true;
                } 
            }
        }

        if (usuarioEncontrado == false){ 
            alert("No existe el usuario buscado");
        }

    }

    repetirOperacion = prompt(`Desea realizar otra busqueda?`);

}
}

if (accion == "LISTAR"){
    let mostrarUsuarios = "";
    for (let i = 0; i < listaUsuarios.length; i++) {
           mostrarUsuarios = mostrarUsuarios  + 
           `
            ID = ${listaUsuarios[i][0]}
            NOMBRE = ${listaUsuarios[i][1]}
            TELEFONO = ${listaUsuarios[i][2]}
            MAIL = ${listaUsuarios[i][3]}
            -----------
            `;
        }
    alert (mostrarUsuarios);

}

/*if (accion == "MODIFICAR"){

    let usuarioAModificar = prompt("Indique el ID del usuario que desea modificar");
    let repetirOperacion = "SI";
            for ()
            listaUsuarios[usuarioAModificar]) =
            if (alumnasOnline[i][j] === usuarioModificar) {
              alumnasOnline.splice(i, 1);
              alert("Hemos borrado al usuario identificado como" + usuarioAModificar);
              break;
            }
            
          }
        }
}*/


/* Debe pedir ingresar el id del usuario a eliminar
Si el usuario existe debe mostrar los datos del usuario y preguntar si desea confirmar la operación
Si la respuesta es afirmativa debe eliminar el usuario de la lista de usuarios y mostrar un mensaje de éxito
Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
A continuación debe pedir si se desea realizar nuevamente el procedimiento
Si la respuesta es afirmativa debe volver a realizar el procedimiento
Si la respuesta es negativa debe llevar al menú de operaciones*/
if (accion=="ELIMINAR"){
    let repetirOperacion ="SI";
    let usuarioEncontrado = false;
    while( repetirOperacion =="SI"){
    let usuarioAEliminar = prompt ("Indique el ID del usuario que desea eliminar");
    for (i=0; i < listaUsuarios.length ; i++){
        if (listaUsuarios[i] == listaUsuarios[usuarioAEliminar]){
            confirmarOperacion = prompt (`Los datos del usuario a eliminar son:
            ID:
            NOMBRE: 
            TELEFONO:
            MAIL:
            Desea confirmar? (SI-NO)
            `)
            if (confirmarOperacion == "SI"){

                alert("La ")
            } else{
                alert("")
            }
        usuarioEncontrado = "SI";
        }
    }
    if (usuarioEncontrado == false){
        alert("El usuario ingresado no existe.");
    }
    }
}

if (accion =="SALIR"){
    volverAlMenuPrincipal = "NO";
}

}

console.log(usuarios);

