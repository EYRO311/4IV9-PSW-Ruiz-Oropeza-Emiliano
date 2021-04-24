function calcular() {
    var vr1 = document.getElementById('primer').value;
    var vr2 = document.getElementById('segundo').value;
    var vr3 = document.getElementById('tercer').value;

    if(vr1>100000||vr2>100000||vr3>100000||vr1<-1000||vr2<-1000||vr3<-1000){

        alert("Eso no se puede");

    }else{

        if(vr1>vr2 & vr1>vr3){
            var p =parseFloat(vr1);
            document.getElementById('promedio').innerHTML = p; 
        }
        else if(vr3>vr1&vr3>vr2){
            var p =parseFloat(vr3);
            document.getElementById('promedio').innerHTML = p;
        }
        else if(vr2>vr1&vr2>vr3){    
            var p =parseFloat(vr2);
            document.getElementById('promedio').innerHTML = p;
        }
        else if(vr2==vr1 & vr1==vr3){
            document.getElementById('promedio').innerHTML = "Los 3 son iguales";
        }
        else if(vr1>vr2 & vr1==vr3){
            document.getElementById('promedio').innerHTML = vr1+" y "+vr3; 
        }
        else if(vr1>vr3 & vr1==vr2){
            document.getElementById('promedio').innerHTML = vr1+" y "+vr2; 
        }
        else if(vr3>vr1 & vr3==vr2){
            document.getElementById('promedio').innerHTML = vr3+" y "+vr2;
        }else{
            alert("Me sorprendiste");
        }
    }
 }