/* let multidimensional=[["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]]
 let cursos= ["HTML5", "CSS3", "JAVASCRIPT", "REACT" , "NODEJS"]
let valorTotal=0
 function callback(a,b){
    a.toUpperCase
    for(let i=0;i<multidimensional.length;i++){
        multidimensional[i].toUpperCase
        let otro=multidimensional[i]
        for (let j=0;j<otro.length;j++){
            if(a[i].indexOf(b)!=-1){
                valorTotal+=
            }
        }
    }
    return valorTotal
 }
console.log(callback([["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]],"HTML5")) */

let multidimensional=[["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]]
 let cursos= ["HTML5", "CSS3", "JAVASCRIPT", "REACT" , "NODEJS"]
   let valorTotal=0

 function callback(a,b){
 
    for(let i=0;i<multidimensional.length;i++){
/*        a[i][0]=multidimensional[i][0].toUpperCase()
 */       /*  a[i][0]=a[i][0].toUpperCase()  */
     cursos=b
     multidimensional=a
         if(b.includes(a[i][0].toUpperCase())==true){
            
                valorTotal+=multidimensional[i][1]
               
            }
       
    }
     
 }
/* console.log(callback([["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]],["HTML5","CSS3"]))
 */

function mensaje(nombre,apellido,multidimensional,cursos,callback){
    return [nombre,apellido, callback(multidimensional,cursos)]
    }
 
let datos=mensaje("alexander","ureta",multidimensional,["REACT","NODEJS","JAVASCRIPT"],callback) 


console.log(`estimado ${datos[0]} ${datos[1]} en funcion de los cursos seleccionados: `)
for(let i=0;i<cursos.length;i++){
    console.log(`${i+1} - ${cursos[i]}`)
}
console.log("el monto total a pagar es de $"+ valorTotal)
/*  mensaje("alexander","ureta",[["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]],["HTML5","JAVASCRIPT","REACT","CSS3"],callback) */
 
