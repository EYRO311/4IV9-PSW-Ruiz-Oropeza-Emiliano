function calcular() {
    var vr1 = document.getElementById('primer').value;
    var vr2 = document.getElementById('segundo').value;
    var vr3 = document.getElementById('tercer').value;
    var vr4 = document.getElementById('examen').value;
    var vr5 = document.getElementById('trabajo').value;

    if(vr1 >10|vr1<0){
        alert("Eso no se puede")
    }
    else if(vr3>10|vr3<0){
        alert("Eso no se puede")
    }
    else if(vr2>10|vr2<0){
        alert("Eso no se puede")
    }
    else if(vr4>10|vr4<0){
        alert("Eso no se puede")
    }
    else if(vr5>10|vr5<0){
        alert("Eso no se puede")
    }
    else{
        var p =((((parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3))/3)*.55)+(parseFloat(vr4)*.35)+(parseFloat(vr5)*.15));
        document.getElementById('promedio').innerHTML = p; 
    }
 }