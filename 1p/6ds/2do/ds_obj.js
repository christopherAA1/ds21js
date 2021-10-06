var v;
var  start = +new Date();
for (a=0; a<7;a++){
for(var i=0;i<10000; i++){
  v=Math.floor(Math.random()*(10001-1)+1);
  console.log("name"+ v);}
}
var end = +new Date();
console.log("tiempo : " + (end-start) +" ms");