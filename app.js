// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let namex = [];  // Arreglo para almacenar los nombres
let numeroMaximo = namex.length;
let numeroGenerado = "";

function limpieza(id) {
    let campo = document.getElementById(id);
    if (campo) {
        campo.innerHTML = "";  // Limpia todo el contenido del elemento (lista, div, etc.)
    } else {
        console.warn(`No se encontró un elemento con el ID: ${id}`);
    }
}


function aleatorios() {
    let aleatorio =  Math.floor(Math.random()*numeroMaximo)+1;
    return aleatorio;
        }



function mostrarAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";  // Limpiar la lista antes de actualizar

    namex.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

        function agregarAmigo() {
            limpieza("listaAmigos"); 
            let input = document.querySelector("#amigo");  // Obtengo el input
            let nombre = input.value.trim();               // Obtengo el valor del input
                    if (nombre) {  // Verifico que no esté vacío
                namex.push(nombre);                        // Agrego el nombre al arreglo
                mostrarAmigos();                          // Actualizo la lista en pantalla
                input.value = "";                         // Limpio el input después de agregar
            } else {
                alert("Por favor ingresa un nombre.");
            }
            console.log(numeroGenerado)
        }

        function sortearAmigo() { 
            if (namex.length === 0) { 
                alert("¡Por favor, ingrese un amigo!");
                return; 
            }
            
            const seleccion = Math.floor(Math.random() * namex.length);
            const eleccion = namex[seleccion];
            
            const respuesta = document.getElementById("resultado");
            respuesta.textContent = `Su Amigo Secreto es: ${eleccion}`;
            
            alert(`Su Amigo Secreto es: ${eleccion}`);
            
            limpieza("listaAmigos");  
        }
        