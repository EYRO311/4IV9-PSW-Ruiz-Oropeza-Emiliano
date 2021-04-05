function calcular() {
    var vr1 = document.getElementById('hombres').value;
    var vr2 = document.getElementById('mujeres').value;

    if(vr1 >40|vr1<0){
        alert("Eso no se puede")
    }
    else if(vr2>40|vr2<0){
        alert("Eso no se puede")
    }
    else{
        var t =((parseFloat(vr1)+parseFloat(vr2)))
        var m =((parseFloat(vr2)*100)/t);
        var h =((parseFloat(vr1)*100)/t);
        document.getElementById('promedio').innerHTML = h + "% de la clase son hombres " + m + "% de la clase son mujeres";
    }
 }
