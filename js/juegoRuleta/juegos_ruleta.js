// JUEGO PLENO (37 a 1)
$(".numero_pleno").click(juego_pleno);
function juego_pleno(){
    verificar_balance();
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let numero_jugado = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===PLENO===");
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    console.log("NUMERO JUGADO USUARIO: ",numero_jugado);
    //4) VERIFICAR IGUALDAD ENTRE RULETA Y USUARIO
    numero_jugado==N_RULETA ? premio_pleno() : perdida_jugada();
}

// JUEGO COLUMNA (2 a 1)
$(".columna").click(juego_columna);
function juego_columna(){
    verificar_balance();
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let columna_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===COLUMNA===");
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    console.log("COLUMNA JUGADA USUARIO: ",columna_jugada);
    //3) VERIFICAR JUGADA
    switch(columna_jugada){
        case 'columna1':
            JUEGOS_RULETA['COLUMNA1'].find(n => n==N_RULETA) ? premio_docena_columna() : perdida_jugada();
            break;
        case 'columna2':
            JUEGOS_RULETA['COLUMNA2'].find(n => n==N_RULETA) ? premio_docena_columna() : perdida_jugada();
            break;
        case 'columna3':
            JUEGOS_RULETA['COLUMNA3'].find(n => n==N_RULETA) ? premio_docena_columna() : perdida_jugada();
            break;
    }
}

// JUEGO LINEA (17 a 1)
$(".linea").click(juego_linea);
function juego_linea(){
    verificar_balance();
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let linea_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===LINEA===");
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    console.log("LINEA JUGADA USUARIO: ",linea_jugada);
    //3) VERIFICAR JUGADA
    switch(linea_jugada){
        case 'linea1':
            JUEGOS_RULETA['LINEA1'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea2':
            JUEGOS_RULETA['LINEA2'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea3':
            JUEGOS_RULETA['LINEA3'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea4':
            JUEGOS_RULETA['LINEA4'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea5':
            JUEGOS_RULETA['LINEA5'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea6':
            JUEGOS_RULETA['LINEA6'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea7':
            JUEGOS_RULETA['LINEA7'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea8':
            JUEGOS_RULETA['LINEA8'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea9':
            JUEGOS_RULETA['LINEA9'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea10':
            JUEGOS_RULETA['LINEA10'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea11':
            JUEGOS_RULETA['LINEA11'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;

        case 'linea12':
            JUEGOS_RULETA['LINEA12'].find(n => n==N_RULETA) ? premio_linea() : perdida_jugada();
            break;
    }
}

//JUEGO DOCENA (2 a 1)
$(".docena").click(juego_docena);
function juego_docena(){
    verificar_balance();
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let docena_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===DOCENA===");
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    console.log("DOCENA JUGADA USUARIO: ",docena_jugada);
    //3) VERIFICAR JUGADA
    switch(docena_jugada){
        case 'docena1':
            JUEGOS_RULETA['DOCENA1'].find(n => n==N_RULETA) ? premio_docena_columna() : perdida_jugada();
            break;
        case 'docena2':
            JUEGOS_RULETA['DOCENA2'].find(n => n==N_RULETA) ? premio_docena_columna() : perdida_jugada();
            break;
        case 'docena3':
            JUEGOS_RULETA['DOCENA3'].find(n => n==N_RULETA) ? premio_docena_columna() : perdida_jugada();
            break;
    }
}

//JUEGO MITAD (1 a 1)
$(".mitad").click(juego_mitad);
function juego_mitad(){
    verificar_balance();
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let mitad_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===MITAD===");
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    console.log("MITAD JUGADA USUARIO: ",mitad_jugada);
    //3) VERIFICAR JUGADA
    switch(mitad_jugada){
        case 'mitad1':
            JUEGOS_RULETA['MITAD1'].find(n => n==N_RULETA) ? premio_simple() : perdida_jugada();
            break;
        case 'mitad2':
            JUEGOS_RULETA['MITAD2'].find(n => n==N_RULETA) ? premio_simple() : perdida_jugada();
            break;
    }
}

//JUEGO PARIDAD (1 a 1)
$(".par_impar").click(juego_paridad);
function juego_paridad(){
    verificar_balance();
    CANTIDAD_JUGADAS++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let paridad_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===PARIDAD===");
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    console.log("PARIDAD JUGADA USUARIO: ",paridad_jugada);
    //3) VERIFICAR JUGADA
    switch(paridad_jugada){
        case 'par':
            JUEGOS_RULETA['PAR'].find(n => n==N_RULETA) ? premio_simple() : perdida_jugada();
            break;
        case 'impar':
            JUEGOS_RULETA['IMPAR'].find(n => n==N_RULETA) ? premio_simple() : perdida_jugada();
            break;
    }
}

//JUEGO COLOR (1 a 1)
$(".color").click(juego_color);
function juego_color(){
    verificar_balance();
    CANTIDAD_JUGADAS++
    //1) NUMERO DE LA RULETA
    numero_ruleta();
    //2) APUESTA DEL USUARIO
    let color_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===COLOR===");
    console.log("NUMERO DE LA RULETA: ", N_RULETA);
    console.log("COLOR JUGADO USUARIO: ",color_jugada);
    //3) VERIFICAR JUGADA
    switch(color_jugada){
        case 'rojas':
            JUEGOS_RULETA['ROJAS'].find(n => n==N_RULETA) ? premio_simple() : perdida_jugada();
            break;
        case 'negras':
            JUEGOS_RULETA['NEGRAS'].find(n => n==N_RULETA) ? premio_simple() : perdida_jugada();
            break;
    }
}

//RETIRO VOLUNTARIO DEL JUEGO
$(".btn_retirarse").click(alerta_retiro);