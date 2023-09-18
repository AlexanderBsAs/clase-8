let html5 = "30 45 25 34 18 23 16 50 72 70"
let css3 = "50 45 71 34 23 45 65 75 63 43 74 70"
let javascript = "70 65 58 45 23 57 34 17 72"
let nodejs = "45 56 73 34 65 72 70 33 32"


let curso1 = html5.split(" ");
let curso2 = css3.split(" " );
let curso3 = javascript.split(" " );
let curso4 = nodejs.split(" " );

function graduados(cursox){
let promedio =0
for(let i = 0; i < cursox.length; i++) 
  { /* cursox[i]=+cursox[i] */
    
    promedio+= +cursox[i]}
return promedio

}


console.log(graduados(curso1))


