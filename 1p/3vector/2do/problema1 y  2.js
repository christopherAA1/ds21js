let p,v;
p=prompt("Agrega la posicion");
v=prompt("Agrega el valor");
let mover=[p,v];
mover.forEach(function(elemento,indice){
console.log(elemento,indice);
})
let o=prompt("Agrega la posicion a eliminar");
if (o==p){
let pos=mover.indexOf("o");
let eliminar=mover.splice(pos,1);
eliminar.forEach(function(elemento,indice){
   console.log(elemento,indice);
}
)}
else if(o!=p){console.log("no puedes eliminar el valor"); }