var n=prompt("agrega la cantidad de numeros que apareceran");
for ( a=n,i=0; i<=a-1; i++){
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
      const rndInt = randomIntFromInterval(1, 100)
      console.log(rndInt);
    }