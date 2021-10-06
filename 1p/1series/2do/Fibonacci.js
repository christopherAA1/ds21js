// puede cambiar el valor de "numero" para una serie mayor
let numero = prompt("agrega un valor");
let fibo=numero => {
    let a=0,b=1,c,d=1;
    console.log(a,b);
    for(i=3;i<=numero;i++){
        c=a+b;
        console.log(c);
        d=d+c;
        a=b;
        b=c;
    }
}
fibo(numero);