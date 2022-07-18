// NUMERO RULETA
function numero_ruleta(){
    return n_ruleta=Math.floor(Math.random()*37)
}

// PREMIOS
function premio_pleno(){
    console.log("USUARIO GANA");
    ganancia_perdida+=(apuesta_estandar*37);
    balance+=(apuesta_estandar*37);
    actualizar_info_juego();
    alerta_gana()}

function premio_docena_columna(){
    console.log("USUARIO GANA");
    ganancia_perdida+=(apuesta_estandar*2);
    balance+=(apuesta_estandar*2);
    actualizar_info_juego();
    alerta_gana()
}

function premio_linea(){
    console.log("USUARIO GANA");
    ganancia_perdida+=(apuesta_estandar*17);
    balance+=(apuesta_estandar*17);
    actualizar_info_juego();
    alerta_gana()
}

function premio_simple(){
    console.log("USUARIO GANA");
    ganancia_perdida+=apuesta_estandar;
    balance+=apuesta_estandar;
    actualizar_info_juego();
    alerta_gana()
}

function perdida_jugada(){
    console.log("USUARIO PIERDE");
    ganancia_perdida-=apuesta_estandar;
    balance-=apuesta_estandar;
    actualizar_info_juego();
    alerta_pierde()
}

//ALERTAS DEL JUEGO (Sweet Alert)
function alerta_gana(){
    Swal.fire({
        title: '¡No va más! Sale el ' + n_ruleta,
        html: '<h1 class="swalGana">GANASTE</h1>',
        heightAuto: false,
        background: '#082132',
        color: 'white',
        confirmButtonText: '¡Vamos!',
        confirmButtonColor: '#08d'
    })
}

function alerta_pierde(){
    Swal.fire({
        title: '¡No va más! Sale el ' + n_ruleta,
        html: '<h1 class="swalPierde">PERDISTE</h1>',
        heightAuto: false,
        background: '#082132',
        color: 'white',
        confirmButtonText: '¡Mierda!',
        confirmButtonColor: '#08d'
    })
}

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
        confirmButtonColor: '#bcbcbc'
    })
}

//VERIFICACION MONEDAS URUARIO
    function verificar_balance(){
        if(balance==0){
            window.open("exit.html","_self");
            guardar_datos_juego();
        }
    }

// ACTUALIZAR DATOS DE JUEGO
function actualizar_info_juego(){
    document.querySelector("#cantidad_jugadas span").innerText = cantidad_jugadas;
    document.querySelector("#apuesta_usuario span").innerText = ganancia_perdida;
    document.querySelector("#balance_total span").innerText = balance;}

// STORAGE DATOS JUEGO
function guardar_datos_juego(){
    sessionStorage.setItem("Jugadas_realizadas", cantidad_jugadas);
    sessionStorage.setItem("Ganancia_perdida_total", ganancia_perdida);
    sessionStorage.setItem("Balance_final", balance);}