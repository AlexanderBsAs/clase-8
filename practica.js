 let multidimensional=[["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]]
 let cursos= ["HTML5", "JAVASCRIPT" , "NODEJS","REACT","CSS3"]
   let valorTotal=0

 function callback(multidimensional,cursos){
 
    for(let i=0;i<multidimensional.length;i++){
/*       a[i][0]=multidimensional[i][0].toUpperCase()
      a[i][0]=a[i][0].toUpperCase()   */
    /*  cursos=b */
      if(cursos.includes(multidimensional[i][0].toUpperCase())==true){
            
                valorTotal+=multidimensional[i][1]
               
            }
       
    }
     
 } 

function mensaje(nombre,apellido,multidimensional,cursos,callback){
    return [nombre,apellido, callback(multidimensional,cursos)]
    }
 

let datos=mensaje("alexander","ureta",multidimensional,cursos,callback) 

console.log(`estimado ${datos[0]} ${datos[1]} los cursos seleccionados son:`)
 
for (let i=0;i<cursos.length;i++){
    console.log(`${i+1 }- ${cursos[i]}`)

}
console.log(`el valor total es $${valorTotal}`)

