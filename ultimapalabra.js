/*    function primeraPalabra1(a){
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
            console.log(primeraPalabra1("hola alex como andas?")) */

            function lista(a){
                let palabra=""
                for(let i=0;i<a.length;i++){
                    if(a[i]==" "){
                         palabra=""
                    }
                    else{
                        palabra+=(a[i])
                    }
                }
                return palabra
            }
            console.log(lista("hola como andas?"))