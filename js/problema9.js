function calcular() {
    var vr1 = document.getElementById('lunes').value;
    var vr2 = document.getElementById('martes').value;
    var vr3 = document.getElementById('miercoles').value;
    var vr4 = document.getElementById('jueves').value;
    var vr5 = document.getElementById('viernes').value;

    if(vr1 >24|vr1<8){
        alert("Eso no se puede")
    }
    if(vr3>24|vr3<8){
        alert("Eso no se puede")
    }
    if(vr2>24|vr2<8){
        alert("Eso no se puede")
    }
    if(vr4>24|vr4<8){
        alert("Eso no se puede")
    }
    if(vr5>24|vr5<8){
        alert("Eso no se puede")
    }
    if(parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3)+parseFloat(vr4)+parseFloat(vr5)>80){
        alert("Eso no se puede y consigue una vida")
    }
    else{
        var m=parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3)+parseFloat(vr4)+parseFloat(vr5);
        if(m>40){
            var s=((m-40)*20)+40*m;
            var p =(s);
            document.getElementById('promedio').innerHTML = p;
        }
        else{
           var p =(m*20);
            document.getElementById('promedio').innerHTML = p; 
        }  
    }
 }