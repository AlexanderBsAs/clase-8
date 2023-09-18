let multidimensional=[["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]]
 let cursos= ["HTML5", "JAVASCRIPT" , "NODEJS"]
   

 function callback(a,b){
 let valorTotal=0
    for(let i=0;i<multidimensional.length;i++){
/*        a[i][0]=multidimensional[i][0].toUpperCase()
 */       /*  a[i][0]=a[i][0].toUpperCase()  */
/*      cursos=b
     multidimensional=a */
         if(cursos.includes(multidimensional[i][0].toUpperCase())==true){
            
                valorTotal+=multidimensional[i][1]
               
            }
       
    }
    return valorTotal
     
 }

function mensaje(nombre,apellido,MULTIDIMENSIONAL,CURSOS,callback){
    MULTIDIMENSIONAL=multidimensional
    CURSOS=cursos
    let montototal=callback(MULTIDIMENSIONAL,CURSOS)
    let array=[nombre,apellido,montototal]
   return array } 
 

let datos=mensaje("alexander","ureta",multidimensional,cursos,callback) 

console.log(`estimado ${datos[0]} ${datos[1]} en funcion de los cursos seleccionados: `)
for(let i=0;i<cursos.length;i++){
    console.log(`${i+1} - ${cursos[i]}`)
}
console.log("el monto total a pagar es de $"+mensaje[2])
 
console.log(datos)