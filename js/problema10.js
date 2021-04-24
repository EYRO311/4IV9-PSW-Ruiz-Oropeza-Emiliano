function calcular() {
    var vr1 = document.getElementById('sueldo').value;
    var vr2 = document.getElementById('antiguedad').value;

    if(vr1<=100 || vr1>1000000){
        alert("eso no se puede") 
    }else if(vr2<0||vr2>50){
        alert("eso no se puede") 
    }else{
        if(vr2<1){
            var p =((parseFloat(vr1)*12)*.05)+vr1*12;
            document.getElementById('promedio').innerHTML = p;  
        }
        else if(vr2>1 & vr2<=2){
            var p =((parseFloat(vr1)*12)*.07)+vr1*12;
            document.getElementById('promedio').innerHTML = p;  
        }
        else if(vr2>2 & vr2<=5){
            var p =((parseFloat(vr1)*12)*.1)+vr1*12;
            document.getElementById('promedio').innerHTML = p; 
        }
        else if(vr2>5 & vr2<=10){
            var p =((parseFloat(vr1)*12)*.15)+vr1*12;
            document.getElementById('promedio').innerHTML = p;
        }
        else if (vr2>10){
            var p =((parseFloat(vr1)*12)*.2)+vr1*12;
            document.getElementById('promedio').innerHTML = p;
        }
    }
    
 }