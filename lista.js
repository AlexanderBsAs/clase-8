/* function lista(a){
    let palabra=[]
    let otro=""
    for(let i=0;i<a.length;i++){
        let caracter=a[i]
        if(caracter==" "){
              
             palabra.push(otro)
            otro=""
        }
        else{
            
           otro+=a[i]
        }
    }
    return palabra
} */
function lista(oración) {
    //Obtengo el largo de la oración para poder recorrerla
    const largo = oración.length;
    //Inicializo la variable que contendrá todas
    // las palabras
    let palabras = [];
    //Inicializo la variable que contendrá la
    // palabra que voy leyendo
    let palabraActual = "";
    //Ciclo para recorrer cada posición de la oración
    // i va de 0 a el largo-1
    for (let i = 0; i < largo; i++) {
    //Obtengo el caracter en la posición i del texto
    const caracter = oración[i];
    //Si el caracter es un espacio
    if (caracter == " ") {
    //Agrego la palabra capturada hasta el momento
    palabras.push(palabraActual);
    //Reinicio la palabra
    palabraActual = "";
    } else {
    //Agrego el caracter a palabra ya que es
    // parte de la palabra
    palabraActual += caracter;
    }
    }
    //Devuelvo la lista de palabras
    return palabras;}

console.log(lista("hola como andas?"))