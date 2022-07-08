// JUEGO PLENO (37 a 1)
$(".numero_pleno").click(juego_pleno);
function juego_pleno(){
    verificar_balance();
    console.log("===PLENO===");
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let numero_jugado = $(this).val();
    console.log("NUMERO JUGADO USUARIO: ",numero_jugado);
    //4) VERIFICAR IGUALDAD ENTRE RULETA Y USUARIO
    if(numero_jugado==N_RULETA){
        console.log("GANA");
        premio_pleno();}
    else{
        console.log("PIERDE");
        perdida_jugada();}
    actualizar_info_juego();
}

// JUEGO COLUMNA (2 a 1)
$(".columna").click(juego_columna);
function juego_columna(){
    verificar_balance();
    console.log("===COLUMNA===");
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let columna_jugada = $(this).val();
    console.log("COLUMNA JUGADA USUARIO: ",columna_jugada);
    //3) VERIFICAR JUGADA
    switch(columna_jugada){
        case 'columna1':
            if(JUEGOS_RULETA['COLUMNA1'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_docena_columna();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
        case 'columna2':
            if(JUEGOS_RULETA['COLUMNA2'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_docena_columna();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
        case 'columna3':
            if(JUEGOS_RULETA['COLUMNA3'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_docena_columna();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
    }
    actualizar_info_juego();
}

// JUEGO LINEA (17 a 1)
$(".linea").click(juego_linea);
function juego_linea(){
    verificar_balance();
    console.log("===LINEA===");
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let linea_jugada = $(this).val();
    console.log("LINEA JUGADA USUARIO: ",linea_jugada);
    //3) VERIFICAR JUGADA
    switch(linea_jugada){
        case 'linea1':
            if(JUEGOS_RULETA['LINEA1'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea2':
            if(JUEGOS_RULETA['LINEA2'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea3':
            if(JUEGOS_RULETA['LINEA3'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea4':
            if(JUEGOS_RULETA['LINEA4'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea5':
            if(JUEGOS_RULETA['LINEA5'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea6':
            if(JUEGOS_RULETA['LINEA6'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea7':
            if(JUEGOS_RULETA['LINEA7'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea8':
            if(JUEGOS_RULETA['LINEA8'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea9':
            if(JUEGOS_RULETA['LINEA9'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea10':
            if(JUEGOS_RULETA['LINEA10'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea11':
            if(JUEGOS_RULETA['LINEA11'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;

        case 'linea12':
            if(JUEGOS_RULETA['LINEA12'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_linea();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break; 
    }
    actualizar_info_juego();
}

//JUEGO DOCENA (2 a 1)
$(".docena").click(juego_docena);
function juego_docena(){
    verificar_balance();
    console.log("===DOCENA===");
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let docena_jugada = $(this).val();
    console.log("DOCENA JUGADA USUARIO: ",docena_jugada);
    //3) VERIFICAR JUGADA
    switch(docena_jugada){
        case 'docena1':
            if(JUEGOS_RULETA['DOCENA1'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_docena_columna();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
        case 'docena2':
            if(JUEGOS_RULETA['DOCENA2'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_docena_columna();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
        case 'docena3':
            if(JUEGOS_RULETA['DOCENA3'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_docena_columna();}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
    }
    actualizar_info_juego();
}

//JUEGO MITAD (1 a 1)
$(".mitad").click(juego_mitad);
function juego_mitad(){
    verificar_balance();
    console.log("===MITAD===");
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    N_RULETA=numero_ruleta();
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let mitad_jugada = $(this).val();
    console.log("MITAD JUGADA USUARIO: ",mitad_jugada);
    //3) VERIFICAR JUGADA
    switch(mitad_jugada){
        case 'mitad1':
            if(JUEGOS_RULETA['MITAD1'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_simple()}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
        case 'mitad2':
            if(JUEGOS_RULETA['MITAD2'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_simple()}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
    }
    actualizar_info_juego();
}

//JUEGO PARIDAD (1 a 1)
$(".par_impar").click(juego_paridad);
function juego_paridad(){
    verificar_balance();
    console.log("===PARIDAD===");
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    N_RULETA=numero_ruleta();
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let paridad_jugada = $(this).val();
    console.log("PARIDAD JUGADA USUARIO: ",paridad_jugada);
    //3) VERIFICAR JUGADA
    switch(paridad_jugada){
        case 'par':
            if(JUEGOS_RULETA['PAR'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_simple()}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
        case 'impar':
            if(JUEGOS_RULETA['IMPAR'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_simple()}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
    }
    actualizar_info_juego();
}

$(".color").click(juego_color);
//JUEGO COLOR (1 a 1)
function juego_color(){
    verificar_balance();
    console.log("===COLOR===");
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    N_RULETA=numero_ruleta();
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let color_jugada = $(this).val();
    console.log("COLOR JUGADO USUARIO: ",color_jugada);
    //3) VERIFICAR JUGADA
    switch(color_jugada){
        case 'rojas':
            if(JUEGOS_RULETA['ROJAS'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_simple()}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
        case 'negras':
            if(JUEGOS_RULETA['NEGRAS'].find(n => n==N_RULETA)){
                console.log("GANA");
                premio_simple()}
            else{
                console.log("PIERDE");
                perdida_jugada();}
            break;
    }
    actualizar_info_juego();
}

//RETIRO VOLUNTARIO DEL JUEGO
let btn_retirarse=document.getElementById('btn_retirarse');
btn_retirarse.addEventListener('click', guardar_datos_juego());