let balance = 10000;
let apuesta_estandar = 1000;

let cantidad_jugadas = 0;
let ganancia_perdida = 0;

let n_ruleta = 0;

const JUEGOS_RULETA = {
    columna1 : [1,4,7,10,13,16,19,22,25,28,31,34],
    columna2 : [2,5,8,11,14,17,20,23,26,29,32,35],
    columna3 : [3,6,9,12,15,18,21,24,27,30,33,36],

    linea1 : [1,2,3],
    linea2 : [4,5,6],
    linea3 : [7,8,9],
    linea4 : [10,11,12],
    linea5 : [13,14,15],
    linea6 : [16,17,18],
    linea7 : [19,20,21],
    linea8 : [22,23,24],
    linea9 : [25,26,27],
    linea10 : [28,29,30],
    linea11 : [31,32,33],
    linea12 : [34,35,36],

    docena1 : [1,2,3,4,5,6,7,8,9,10,11,12],
    docena2 : [13,14,15,16,17,18,19,20,21,22,23,24],
    docena3 : [25,26,27,28,29,30,31,32,33,34,35,36],

    mitad1 : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    mitad2 : [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],

    par : [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],
    impar : [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35],

    rojas : [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36],
    negras : [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35],
}