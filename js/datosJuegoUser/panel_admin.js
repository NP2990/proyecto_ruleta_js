let btn_recuperar=document.getElementById('recuperar_datos_user');
btn_recuperar.addEventListener('click', recuperar_datos_final);
function recuperar_datos_final(){
    let recuperar_cliente_final_json=localStorage.getItem("Cliente");
    recuperar_cliente_final_json=JSON.parse(recuperar_cliente_final_json);
    console.log(recuperar_cliente_final_json)
}

let btn_fetch=document.getElementById('recuperar_datos_fetch');
btn_fetch.addEventListener('click', cargarJugador);
const tabla = document.querySelector('#lista-jugadores tbody');
function cargarJugador(){
    fetch("./json/jugadores_ruleta.json")
        .then(response => response.json())
        .then(jugadores => {
            jugadores.forEach(jugador => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${jugador.id}</td>
                    <td>${jugador.nombre}</td>
                    <td>${jugador.apellido}</td>
                    <td>${jugador.edad}</td>
                    <td>${jugador.gananciaperdida}</td>
                    <td>${jugador.dinero}</td>
                `;
                tabla.appendChild(row);
            });
    });
}