function problema1(){
    var p1_input=document.querySelector('#p1-input').value;
    var p1_array=p1_input.split(' ').reverse();
    var p1_res='';
    p1_array.forEach(function(palabra, i){
        if(i!=0 || i != p1_array.lenght)p1_res += ' ';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent=p1_res;
}
function problema2(){
    var p2_x1=document.querySelector('#p2-x1').value;
    var p2_x2=document.querySelector('#p2-x2').value;
    var p2_x3=document.querySelector('#p2-x3').value;
    var p2_x4=document.querySelector('#p2-x4').value;
    var p2_x5=document.querySelector('#p2-x5').value;

    var p2_y1=document.querySelector('#p2-y1').value;
    var p2_y2=document.querySelector('#p2-y2').value;
    var p2_y3=document.querySelector('#p2-y3').value;
    var p2_y4=document.querySelector('#p2-y4').value;
    var p2_y5=document.querySelector('#p2-y5').value;
    
    var v1=[p2_x1,p2_x2,p2_x3,p2_x4,p2_x5];
    var v2=[p2_y1,p2_y2,p2_y3,p2_y4,p2_y5];

    v1=v1.sort(function(a,b){
        return b-a;
    });
    v2=v2.sort(function(a,b){
        return b-a;
    });
    v2=v2.reverse();
    var p2_producto=0;
    for(var i=0;i< v1.length;i++){
        p2_producto+=v1[i]*v2[i];
    }
    document.querySelector('#p2-output').textContent='Producto escalar minimo:'+p2_producto;
}
function problema3(){
    var p=0;
    var v=[];
    
    var abcdario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z",","];
    var p3_input=document.querySelector('#p3-input').value; 
    var arreglo = p3_input.split('');
    var p3_res=[];
    for(var i=0;i< arreglo.length;i++){
        for(var j=0;j<  abcdario.length;j++){
            if(abcdario[j]==arreglo[i]){
                p3_res.push(arreglo[i]);
                if (arreglo[i]==","||i==arreglo.length-1){
                    v[p]=i+1;
                    p=p+1;
                    
                }
            }
        }
    }

    if (p!=0) {
       var temp=[];
       var e=0;
        for (i=0;i<p3_res.length;i=v[e]){
            if(i!=0){
                e+=1;
            }
            lol=p3_res.slice(i,v[e]);
            temp.push(lol); 
        } 
    
        const unicos = [];
        var kot=[];
        for (i = 0; i< temp.length; i++) {
            for(var j = 0; j < temp[i].length; j++) {
                const elemento = temp[i][j];    
                if (temp[i][j]!=','&& !unicos.includes(temp[i][j]) ) {
                    unicos.push(elemento);
                }
            }
            kot[i]=unicos.slice(0,unicos.length);
            for (var m = 0; m < unicos.length; m++) {
                delete unicos[m];
            }
        }
        var listo=["El numero de caracteres unicos es:"];
        for (var g = 0; g < kot.length; g++) {
            if(g==0){
                listo.push(kot[g].length);}
            else{
                listo.push(kot[g].length-kot[g-1].length);
            }
            listo.push("(");
            listo.push(kot[g]);
            listo.push(")");
        
        }
        document.querySelector('#p3-output').textContent=listo;
    }else{
        const unicos = [];
        var kot=[];
        for (i = 0; i< p3_res.length; i++) {
            const elemento = p3_res[i];    
             if (temp[i]!=','&& !unicos.includes(temp[i]) ) {
                    unicos.push(elemento);
                }
            kot[i]=unicos.slice(0,unicos.length);
            for (var m = 0; m < unicos.length; m++) {
                delete unicos[m];
            }
        }
        var listo=["El numero de caracteres unicos es:",];
        for (var g = 0; g < kot.length; g++) {
            if(g==0){
                listo.push(kot[g].length);}
            else{
                listo.push(kot[g].length-kot[g-1].length);
            }
            listo.push("(");
            listo.push(kot[g]);
            listo.push(")");
        
        } 
        document.querySelector('#p3-output').textContent=listo;
    }
}
