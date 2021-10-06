let n = prompt("agrega un valor");
let fn = n => {
    for(let s=1,k=1; k<=n; k++,s*=2)
	console.log(s)
}

fn(n)