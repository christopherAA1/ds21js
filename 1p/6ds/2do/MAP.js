var v;
var t;
var  start = +new Date();
for (a=0; a<7;a++){ 
for(var i=0;i<10000; i++){
  v=Math.floor(Math.random()*(10001-1)+1);
  console.log("name"+ v);
}  
}
//profe una disculpa pero al colocar el resultado de los numeros al azar la funcion 
//map dice que no es una funcion, pero cuando lo hago con un arreglo ejemplo: var f=[1,2,3,4]
//si lo toma como funcion 
console.log(miles);
var miles=  v.map(function(elemento){ 
   return elemento*1000 
    }); 
var end = +new Date();
console.log("tiempo : " + (end-start) +" ms");