var p=0;
var v=[];
console.time("tiempo");
for(var i=0;i<10000; i++){
    v[i]=Math.floor(Math.random()*(10001-1)+1);
}const hola =v=>{
const l=v.length;
for(var ii=0 ; ii<v.length-1 ; ii++){
    var menor=i;
    for(var j=ii+1 ; j<v.length ; j++)
      {p++;
         if (v[menor] > v[j]) menor = j;
      }
      var temp = v[menor];
      v[menor] = v[ii];
      v[ii] = temp;}
     
return v;
};const r=hola(v); console.timeEnd("tiempo : "); console.log("pasos : "+p);

v.forEach(function(elemento){
   console.log(elemento);
})