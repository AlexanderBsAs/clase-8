let numeros=[0,55,45,87,94,12,38,48]
function numero(a,b){

for (let i=0;i<a.length;i++){
if(b==a[i]){
   return console.log("numero encontrado")
}
else{
    return console.log("numero no encontrado")
}
}


}
numero([0,55,45,87,94,12,38,48],50)

let tomas=["toma 1","toma 2","pan 1","pan 2","todos ponen","toma todo"]
function juego(toma,vueltas){
if(vueltas>=2&&vueltas<=6)
    {
    for(let i =0;i<=vueltas;i++){
        return toma[(Math.random())]
    }
}}

console.log(juego([["toma 1","toma 2","pan 1","pan 2","todos ponen","toma todo"]],5))


/* let numerito= [10,22,45,65,32,98,77,48]
let totalpares=[]
let totalimpares=[]
let sumapares=0
let sumaimpares=0
let sumatotal=0
function imparpar(a){
for(let i=0;i<numerito.length;i++){
    if(numerito[i]%2==0)
 {
    totalpares.push(numerito[i])
    sumapares += numerito[i]
}
else{
    totalimpares.push(numerito[i])
    sumaimpares+= numerito[i]
}
    sumatotal=sumapares+sumaimpares
}
 
return `Vamos a calcular la suma total de pares e impares
tienes ${totalpares.length} numeros pares que son:
${totalpares}
y por otro lado tienes ${totalimpares.length} numeros impares que son:
${totalimpares}
la suma total de los numeros pares es: ${sumapares}
la suma total de numeros impares es: ${sumaimpares}

la suma total de impares y pares es: ${sumatotal}`

}

console.log(imparpar(numerito)) */
/* console.log(totalpares)
 console.log(sumapares)
 console.log(sumaimpares)
 console.log(totalimpares) */