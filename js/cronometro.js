let temporizador = document.getElementById('temporizador');
let iniciar = document.getElementById('iniciar');
let resetear=document.getElementById('resetear');
let grabar=document.getElementById('grabar')
let alamacenamiento=document.getElementById('almacenartiempo')

let tiempo=0;
let intervalo=0;
let verificador=false;

init();

function init(){
    iniciar.addEventListener('click',iniciarContador);
    resetear.addEventListener('click',resetearContador);
    grabar.addEventListener('click',grabarContador);
}

function iniciarContador(){
    if(verificador == false){
        intervalo = setInterval(fuction(){
            tiempo += 0.01;
            temporizador.innerHTML = tiempo.toFixed(2);
        },10);
        verificador =true;
    }else{
        verificador=false;
        clearInterval(intervalo);
    }
}

function resetearContador(){
    verificador=false;
    tiempo=0;
    temporizador.innerHTML=tiempo+'.00';
    clearIntervalo(intervalo);
    while(almacenarTiempos.firstChild){
        almacenarTiempos.removeChild(almacenarTiempos.firstChild);
    }
}

function grabarContador(){
    if(temporizador.textContent === '0.00'){
        console.log('click para iniciar el conometro');
    }else{
        let p=document.createElement('ul');
        p.innerHTML=`
        <li> Tiempo:${tiempo.toFixed(2)}</li>
        `;
        almacenarTiempos.appendChild(p);
    }
}