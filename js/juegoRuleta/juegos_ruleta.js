// JUEGO PLENO (37 a 1)
$(".numero_pleno").click(juego_pleno);
function juego_pleno(){
    verificar_balance();
    cantidad_jugadas++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let numero_jugado = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===PLENO===");
    console.log("NUMERO DE LA RULETA: ", n_ruleta);
    console.log("NUMERO JUGADO USUARIO: ",numero_jugado);
    //4) VERIFICAR IGUALDAD ENTRE RULETA Y USUARIO
    numero_jugado==n_ruleta ? premio_pleno() : perdida_jugada();
}

// JUEGO COLUMNA (2 a 1)
$(".columna").click(juego_columna);
function juego_columna(){
    verificar_balance();
    cantidad_jugadas++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let columna_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===COLUMNA===");
    console.log("NUMERO DE LA RULETA: ", n_ruleta);
    console.log("COLUMNA JUGADA USUARIO: ",columna_jugada);
    //3) VERIFICAR JUGADA
    switch(columna_jugada){
        case 'columna1':
            JUEGOS_RULETA['columna1'].find(n => n==n_ruleta) ? premio_docena_columna() : perdida_jugada();
            break;
        case 'columna2':
            JUEGOS_RULETA['columna2'].find(n => n==n_ruleta) ? premio_docena_columna() : perdida_jugada();
            break;
        case 'columna3':
            JUEGOS_RULETA['columna3'].find(n => n==n_ruleta) ? premio_docena_columna() : perdida_jugada();
            break;
    }
}

// JUEGO LINEA (17 a 1)
$(".linea").click(juego_linea);
function juego_linea(){
    verificar_balance();
    cantidad_jugadas++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let linea_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===LINEA===");
    console.log("NUMERO DE LA RULETA: ", n_ruleta);
    console.log("LINEA JUGADA USUARIO: ",linea_jugada);
    //3) VERIFICAR JUGADA
    switch(linea_jugada){
        case 'linea1':
            JUEGOS_RULETA['linea1'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea2':
            JUEGOS_RULETA['linea2'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea3':
            JUEGOS_RULETA['linea3'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea4':
            JUEGOS_RULETA['linea4'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea5':
            JUEGOS_RULETA['linea5'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea6':
            JUEGOS_RULETA['linea6'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea7':
            JUEGOS_RULETA['linea7'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea8':
            JUEGOS_RULETA['linea8'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea9':
            JUEGOS_RULETA['linea9'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea10':
            JUEGOS_RULETA['linea10'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea11':
            JUEGOS_RULETA['linea11'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;

        case 'linea12':
            JUEGOS_RULETA['linea12'].find(n => n==n_ruleta) ? premio_linea() : perdida_jugada();
            break;
    }
}

//JUEGO DOCENA (2 a 1)
$(".docena").click(juego_docena);
function juego_docena(){
    verificar_balance();
    cantidad_jugadas++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let docena_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===DOCENA===");
    console.log("NUMERO DE LA RULETA: ", n_ruleta);
    console.log("DOCENA JUGADA USUARIO: ",docena_jugada);
    //3) VERIFICAR JUGADA
    switch(docena_jugada){
        case 'docena1':
            JUEGOS_RULETA['docena1'].find(n => n==n_ruleta) ? premio_docena_columna() : perdida_jugada();
            break;
        case 'docena2':
            JUEGOS_RULETA['docena2'].find(n => n==n_ruleta) ? premio_docena_columna() : perdida_jugada();
            break;
        case 'docena3':
            JUEGOS_RULETA['docena3'].find(n => n==n_ruleta) ? premio_docena_columna() : perdida_jugada();
            break;
    }
}

//JUEGO MITAD (1 a 1)
$(".mitad").click(juego_mitad);
function juego_mitad(){
    verificar_balance();
    cantidad_jugadas++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let mitad_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===MITAD===");
    console.log("NUMERO DE LA RULETA: ", n_ruleta);
    console.log("MITAD JUGADA USUARIO: ",mitad_jugada);
    //3) VERIFICAR JUGADA
    switch(mitad_jugada){
        case 'mitad1':
            JUEGOS_RULETA['mitad1'].find(n => n==n_ruleta) ? premio_simple() : perdida_jugada();
            break;
        case 'mitad2':
            JUEGOS_RULETA['mitad2'].find(n => n==n_ruleta) ? premio_simple() : perdida_jugada();
            break;
    }
}

//JUEGO PARIDAD (1 a 1)
$(".par_impar").click(juego_paridad);
function juego_paridad(){
    verificar_balance();
    cantidad_jugadas++
    //1) CONSEGUIR NUMERO DE LA RULETA
    numero_ruleta();
    //2) CONSEGUIR NUMERO APOSTADO POR EL USUARIO
    let paridad_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===PARIDAD===");
    console.log("NUMERO DE LA RULETA: ", n_ruleta);
    console.log("PARIDAD JUGADA USUARIO: ",paridad_jugada);
    //3) VERIFICAR JUGADA
    switch(paridad_jugada){
        case 'par':
            JUEGOS_RULETA['par'].find(n => n==n_ruleta) ? premio_simple() : perdida_jugada();
            break;
        case 'impar':
            JUEGOS_RULETA['impar'].find(n => n==n_ruleta) ? premio_simple() : perdida_jugada();
            break;
    }
}

//JUEGO COLOR (1 a 1)
$(".color").click(juego_color);
function juego_color(){
    verificar_balance();
    cantidad_jugadas++
    //1) NUMERO DE LA RULETA
    numero_ruleta();
    //2) APUESTA DEL USUARIO
    let color_jugada = $(this).val();
    //CONSOLE PARA PRUEBAS
    console.log("===COLOR===");
    console.log("NUMERO DE LA RULETA: ", n_ruleta);
    console.log("COLOR JUGADO USUARIO: ",color_jugada);
    //3) VERIFICAR JUGADA
    switch(color_jugada){
        case 'rojas':
            JUEGOS_RULETA['rojas'].find(n => n==n_ruleta) ? premio_simple() : perdida_jugada();
            break;
        case 'negras':
            JUEGOS_RULETA['negras'].find(n => n==n_ruleta) ? premio_simple() : perdida_jugada();
            break;
    }
}

//RETIRO VOLUNTARIO DEL JUEGO
$(".btn_retirarse").click(alerta_retiro);