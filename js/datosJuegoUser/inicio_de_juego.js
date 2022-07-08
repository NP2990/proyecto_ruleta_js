let btn_empezar=document.getElementById('btn_empezar')
btn_empezar.disabled = true;

let btn_validar=document.getElementById('btn_validar')
btn_validar.disabled = false;

btn_validar.addEventListener('click', validacion_datos_usuario);

function validacion_datos_usuario(){
    let nombre=document.getElementById('nombre');
    let apellido=document.getElementById('apellido');
    let edad=document.getElementById('edad');
    let subtitulo=document.getElementById('subtitulo');

    if(nombre.value=="" || apellido.value==""){
        subtitulo.innerHTML="<b style='color: red;'>Nombre o apellido no válidos</b>";
    }
    else if(edad.value<18){
        subtitulo.innerHTML="<b style='color: red;'>Siendo menor de edad no podés jugar</b>";
    }
    else{
        btn_empezar.disabled = false; 
        btn_empezar.classList.remove('disabled');
    
        btn_validar.disabled = true; 
        btn_validar.classList.add('disabled');
    }
}

btn_empezar.addEventListener('click', guardar_datos_usuario);
function guardar_datos_usuario(){
<<<<<<< HEAD
=======
    let nombre=document.getElementById('nombre');
    let apellido=document.getElementById('apellido');
    let edad=document.getElementById('edad');
>>>>>>> b5d62ab31f1e87a23c593583b83bff145acbe9cd
    sessionStorage.setItem("Nombre jugador", nombre.value);
    sessionStorage.setItem("Apellido jugador", apellido.value);
    sessionStorage.setItem("Edad jugador", edad.value);
}
