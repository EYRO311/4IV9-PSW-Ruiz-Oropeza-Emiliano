 function calcular() {
    var vr1 = document.getElementById('depini').value;
    var vr2 = document.getElementById('meses').value;
    if(vr1.length >7|vr2<0){
        alert("No se puede")
    }
    else{
        var t=0;
        var m=t;
        var y;
        for(var i=0; i < vr2; i++){
        t=m
        y=(parseFloat(vr1)+m)*0.02    
        t=y+m
        var p=parseFloat(vr1)+t
        }
        
        document.getElementById('promedio').innerHTML = t; 
    }
 }