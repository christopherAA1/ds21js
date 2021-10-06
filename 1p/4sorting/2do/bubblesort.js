var p=0;
var v=[];
console.time("tiempo");
for(var i=0;i<10000; i++){
    v[i]=Math.floor(Math.random()*(10001-1)+1);
}const hola =v=>{
const l=v.length;
for(var a=0;a<l;a++){
for(j=0;j<l-1-a;j++){
    p++;
    if(v[j]>v[j+1]){
        [v[j], v[j+1]]=[v[j+1],v[j]];
    }
}
}return v;
};const r=hola(v); console.timeEnd("tiempo"); console.log(p);
console.log(v.sort());