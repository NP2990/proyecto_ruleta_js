// NUMERO RULETA
function numero_ruleta(){
    return N_RULETA=Math.floor(Math.random()*37)}

// PREMIOS
function premio_pleno(){
    GANANCIA_PERDIDA+=(APUESTA_ESTANDAR*37);
    BALANCE+=(APUESTA_ESTANDAR*37);}

function premio_docena_columna(){
    GANANCIA_PERDIDA+=(APUESTA_ESTANDAR*2);
    BALANCE+=(APUESTA_ESTANDAR*2);}

function premio_linea(){
    GANANCIA_PERDIDA+=(APUESTA_ESTANDAR*17);
    BALANCE+=(APUESTA_ESTANDAR*17);}

function premio_simple(){
    GANANCIA_PERDIDA+=APUESTA_ESTANDAR;
    BALANCE+=APUESTA_ESTANDAR;}

function perdida_jugada(){
    GANANCIA_PERDIDA-=APUESTA_ESTANDAR;
    BALANCE-=APUESTA_ESTANDAR;}

function verificar_balance(){
    if(BALANCE==0){
        window.open("exit.html","_self");
        guardar_datos_juego();
    }
}

// ACTUALIZAR DATOS DE JUEGO
function actualizar_info_juego(){
    document.querySelector("#num_ruleta span").innerText = N_RULETA;
    document.querySelector("#cantidad_jugadas span").innerText = CANTIDAD_JUGADAS;
    document.querySelector("#apuesta_usuario span").innerText = GANANCIA_PERDIDA;
    document.querySelector("#balance_total span").innerText = BALANCE;}

// STORAGE DATOS JUEGO
function guardar_datos_juego(){
    sessionStorage.setItem("Jugadas_realizadas", CANTIDAD_JUGADAS);
    sessionStorage.setItem("Ganancia_perdida_total", GANANCIA_PERDIDA);
    sessionStorage.setItem("Balance_final", BALANCE);
}