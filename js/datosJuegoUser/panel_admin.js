$(".admin").click(log_admin);
function log_admin(){
    const userAdmin='admin';
    const passAdmin='admin';
    let validacion;
    Swal.fire({
        heightAuto: false,
        background: '#082132',
        color: 'white',
        title: 'Log In',
        html: `<input type="text" id="user" class="swal2-input" placeholder="Usuario">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
        confirmButtonText: 'Log In',
        confirmButtonColor: '#7707a3',
        focusConfirm: false,
        preConfirm: () => {
            const user = Swal.getPopup().querySelector('#user').value
            const password = Swal.getPopup().querySelector('#password').value
            !user || !password || user!=userAdmin || password!=passAdmin ? Swal.showValidationMessage(`Escriba Usuario y Contraseña válidos`) : validacion="valido";
        }
    })
    .then(() => {
        if(validacion=="valido"){
            Swal.fire({
            heightAuto: false,
            background: '#082132',
            color: 'white',
            title: 'Bienvenido, Admin',
            confirmButtonText: '<a class="btnlogAdmin" href="paneladmin.html">Ir al panel</a>',
            confirmButtonColor: '#7707a3',
            focusConfirm: false
            })}
    })
}

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
                    <td>${jugador.nombre}</td>
                    <td>${jugador.apellido}</td>
                    <td>${jugador.edad}</td>
                    <td>${jugador.cantjugadas}</td>
                    <td>${jugador.gananciaperdida}</td>
                `;
                tabla.appendChild(row);
            });
    });
}