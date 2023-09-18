 function invertirTexto(array){
    let texto=""
    for (let i=array.length-1;i>=0;i--){
        texto+=array[i]
        
    }
    return texto
}
console.log(invertirTexto("aloh")) 

/* function invertirTexto(array){
    let texto=[]
    for (let i=array.length;i>=0;i--){
        texto.push(array[i])
        
    }
     texto=texto.join("") 
    return texto
}
console.log(invertirTexto("")) */