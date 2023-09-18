/* function primeraPalabra(a){
  let split= a.split(" ")
  let primerapalabra= split[0]
  return primerapalabra
}
console.log(primeraPalabra("hola alex como andas")) */

/* function primeraPalabra(a){
    let palabra=""
    for (let i=0;i<a.length;i++){
      
        palabra=a.slice(a[i]," ")
       let indexof=a.indexOf(" ")
        }
       return palabra
    }
    

console.log(primeraPalabra("hola alex como andas")) */

/* function primeraPalabra(a){
    let palabra=""
    for (let i=a.length-1;i>=0;i--){
      
     
       let indexof=a.indexOf(" ")
       palabra= a.slice(a[i],indexof)
       
        }
       return palabra
    }
    console.log(primeraPalabra("hola alex como andas"))

    function primeraPalabra(a){
        let palabra=""
        for (let i=0;i<a.length;i++){
          
           
           let indexof=a.indexOf(" ")
           palabra= a.slice(a[i],indexof)
           
            }
           return palabra
        }
        console.log(primeraPalabra("hola alex como andas")) */

        function PrimeraPalabra(oración) {
            //Obtengo el largo de la oración para poder recorrerla
            const largo = oración.length;
            //Inicializo la variable que contendrá la primer
            // palabra
            let palabra = "";
            //Ciclo para recorrer cada posición de la oración
            // i va de 0 a el largo-1
            for (let i = 0; i < largo; i++) {
            //Obtengo el caracter en la posición i del texto
            const caracter = oración[i];
            //Si el caracter es un espacio
            if (caracter == " ") {
            //Devuelvo la primer palabra
            return palabra;
            } else {
            //Agrego el caracter a palabra
            // ya que es parte de la palabra
            palabra += caracter;
            }
            }
            //Devuelvo la palabra en el
            // caso de que todo el texto sea solo una palabra
            return palabra;
            }
            console.log(PrimeraPalabra("hola alex como andas"))


            function primeraPalabra1(a){
                let palabra=""
                for(let i=0;i<a.length;i++){
                    let simbolo=a[i]
                    if(simbolo==" "){
                        return palabra
                    }
                    else{
                        palabra+=simbolo
                    }
                }
                return palabra
            }
            console.log(primeraPalabra1("hola alex como andas?"))