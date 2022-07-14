// DATOS FINAL DEL JUEGO
window.addEventListener("load", function() {
    document.querySelector("#span_nombre_usuario_final").innerText = sessionStorage.getItem("Nombre jugador");
    document.querySelector("#span_jugadas_final").innerText = sessionStorage.getItem("Jugadas_realizadas");
    document.querySelector("#span_balance_final").innerText = sessionStorage.getItem("Balance_final");

    let final_juego_usuario = [];
    let nombre_final=sessionStorage.getItem("Nombre jugador");
    let apellido_final=sessionStorage.getItem("Apellido jugador");
    let cant_jugadas_final=sessionStorage.getItem("Jugadas_realizadas");
    let ganancia_perdida_final=sessionStorage.getItem("Ganancia_perdida_total");
    let cliente_final={'Nombre':nombre_final, 'Apellido':apellido_final, 'CantidadJugadas':cant_jugadas_final,'GananciaPerdida':ganancia_perdida_final};
    
    let cliente_final_json=JSON.stringify(cliente_final);
    
    final_juego_usuario.push(cliente_final_json);
    localStorage.setItem("Cliente",final_juego_usuario);
});

function recuperar_datos_final(){
    let recuperar_cliente_final_json=localStorage.getItem("Cliente");
    recuperar_cliente_final_json=JSON.parse(recuperar_cliente_final_json);
    console.log(recuperar_cliente_final_json)
}

let btn_recuperar=document.getElementById('recuperar_datos_user');
btn_recuperar.addEventListener('click', recuperar_datos_final);
