let multidimensional=[["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]]
 let cursos= ["HTML5", "CSS3", "JAVASCRIPT", "REACT" , "NODEJS"]
let valorTotal=0

function callback(a,b){

    for(let i=0;i<multidimensional.length;i++){

        a[i][0]=a[i][0].toUpperCase() 


         if(a[i][0].includes(b[i])==true){

                valorTotal+=a[i][1]

            }

    }
    return valorTotal
 }
 console.log(callback([["html5",4000],["css3",5000],["javascript",10000],["react",7000],["nodejs",15000]],["HTML5","CSS3","JAVASCRIPT","REACT","NODEJS"])) 
