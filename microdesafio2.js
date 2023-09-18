let HTML5= "30 45 25 34 18 23 16 50 72 70"
let CSS3= "50 45 71 34 23 45 65 75 63 43 74 70"
let JAVASCRIPT= "70 65 58 45 23 57 34 17 72"
let NODEJS= "45 56 73 34 65 72 70 32";


let html5split= HTML5.split(" ")
let css3split= CSS3.split(" ")
let javascriptsplit= JAVASCRIPT.split(" ")
let nodejssplit= NODEJS.split(" ")
/* console.log(html5split) */

function graduados(html5,css3,javascript,nodejs,curso){
    let promedioCurso=0
 /*    html5=html5split
    css3=css3split
    javascript=javascriptsplit
    nodejs=nodejssplit
    html5split= +html5split */
    switch (curso){
        case 1:
            for (let i=0;i<html5split.length;i++){
                promedioCurso+= +html5split[i] 
            }       
            promedioCurso=promedioCurso/html5split.length

            console.log(`elegiste html5, el promedio total de notas en este curso es:`)
          
            
break;
case 2:
    for (let i=0;i<css3split.length;i++){
        promedioCurso+= +css3split[i] 
       
        
  } 
  promedioCurso=promedioCurso/css3split.length
  console.log(`elegiste css3, el promedio total de notas en este curso es:`)
   
    break;
    case 3:
        for (let i=0;i<javascriptsplit.length;i++){
            promedioCurso+= +javascriptsplit[i]
          
            
      } 
      promedioCurso=promedioCurso/javascriptsplit.length
     
      
      console.log(`elegiste javascript, el promedio total de notas en este curso es:`)
        break;
        case 4:
            for (let i=0;i<nodejssplit.length;i++){
                promedioCurso+= +nodejssplit[i] 
                
          }
          promedioCurso=promedioCurso/nodejssplit.length
          console.log(`elegiste nodejs, el promedio total de notas en este curso es:`)
            break;

            default:
                return `son 4 cursos, debes elegir : 
                1= HTML5, 2=CSS3, 3=JAVASCRIPT, 4=NODEJS`

    }


    return promedioCurso
    
}
console.log(graduados(HTML5,CSS3,JAVASCRIPT,NODEJS,5))