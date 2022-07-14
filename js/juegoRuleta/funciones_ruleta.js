// NUMERO RULETA
function numero_ruleta(){
    return N_RULETA=Math.floor(Math.random()*37)}

// PREMIOS
function premio_pleno(){
    console.log("USUARIO GANA");
    GANANCIA_PERDIDA+=(APUESTA_ESTANDAR*37);
    BALANCE+=(APUESTA_ESTANDAR*37);
<<<<<<< HEAD
    actualizar_info_juego();
=======
>>>>>>> e368459e8cc0721eb9c5e85d32f0097e2876030f
    alerta_gana()}

function premio_docena_columna(){
    console.log("USUARIO GANA");
    GANANCIA_PERDIDA+=(APUESTA_ESTANDAR*2);
    BALANCE+=(APUESTA_ESTANDAR*2);
<<<<<<< HEAD
    actualizar_info_juego();
=======
>>>>>>> e368459e8cc0721eb9c5e85d32f0097e2876030f
    alerta_gana()}

function premio_linea(){
    console.log("USUARIO GANA");
    GANANCIA_PERDIDA+=(APUESTA_ESTANDAR*17);
    BALANCE+=(APUESTA_ESTANDAR*17);
<<<<<<< HEAD
    actualizar_info_juego();
=======
>>>>>>> e368459e8cc0721eb9c5e85d32f0097e2876030f
    alerta_gana()}

function premio_simple(){
    console.log("USUARIO GANA");
    GANANCIA_PERDIDA+=APUESTA_ESTANDAR;
    BALANCE+=APUESTA_ESTANDAR;
<<<<<<< HEAD
    actualizar_info_juego();
=======
>>>>>>> e368459e8cc0721eb9c5e85d32f0097e2876030f
    alerta_gana()}

function perdida_jugada(){
    console.log("USUARIO PIERDE");
    GANANCIA_PERDIDA-=APUESTA_ESTANDAR;
    BALANCE-=APUESTA_ESTANDAR;
<<<<<<< HEAD
    actualizar_info_juego();
=======
>>>>>>> e368459e8cc0721eb9c5e85d32f0097e2876030f
    alerta_pierde()}

//ALERTAS DEL JUEGO (Sweet Alert)
function alerta_gana(){
    Swal.fire({
        title: '¡No va más! Sale el ' + N_RULETA,
        html: '<h1 class="swalGana">GANASTE</h1>',
        heightAuto: false,
        background: '#082132',
        color: 'white',
        confirmButtonText: '¡Vamos!',
        confirmButtonColor: '#08d',
    })}

function alerta_pierde(){
    Swal.fire({
        title: '¡No va más! Sale el ' + N_RULETA,
        html: '<h1 class="swalPierde">PERDISTE</h1>',
        heightAuto: false,
        background: '#082132',
        color: 'white',
        confirmButtonText: '¡Mierda!',
        confirmButtonColor: '#08d',
    })}

<<<<<<< HEAD
//RETIRO VOLUNTARIO USER Y STORAGE DATOS JUEGO
function alerta_retiro(){
    guardar_datos_juego();
    Swal.fire({
        title: '¿Ya te querés ir?',
        html: '<h1 class="swalRetiro">¿Seguro?</h1>',
        heightAuto: false,
        background: '#082132',
        color: 'white',
        showCloseButton: 'true',
        showCancelButton: 'true',
        focusCancel: 'true',
        cancelButtonText: 'Para nada',
        cancelButtonColor: '#08d',
        confirmButtonText: '<a class="btnConfirmSWAL" href="exit.html">Obvio</a>',
        confirmButtonColor: '#bcbcbc',
    })}

=======
>>>>>>> e368459e8cc0721eb9c5e85d32f0097e2876030f
//VERIFICACION MONEDAS URUARIO
    function verificar_balance(){
        if(BALANCE==0){
            window.open("exit.html","_self");
            guardar_datos_juego();
        }
    }

// ACTUALIZAR DATOS DE JUEGO
function actualizar_info_juego(){
    document.querySelector("#cantidad_jugadas span").innerText = CANTIDAD_JUGADAS;
    document.querySelector("#apuesta_usuario span").innerText = GANANCIA_PERDIDA;
    document.querySelector("#balance_total span").innerText = BALANCE;}

// STORAGE DATOS JUEGO
function guardar_datos_juego(){
    sessionStorage.setItem("Jugadas_realizadas", CANTIDAD_JUGADAS);
    sessionStorage.setItem("Ganancia_perdida_total", GANANCIA_PERDIDA);
    sessionStorage.setItem("Balance_final", BALANCE);
}