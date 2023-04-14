const formularioUsuarios = document.querySelector(".formularioUsuarios")
const contenedorMascota = document.querySelector("#contenedorMascota")

const mascota = {
                nombreMascota:"" ,
                cumpleGato:"",
                sexoMascota:"",
                peso :0, 
                cirPanza:0, 
                largoPata:0 
                }

const calcularIMC = (peso,cp,lp) => { 
    var a = cp/0.70622;
    var b = a-lp;
    var c = b/0.9156;
    var d = c-lp;
    return d;
}


const renderzarMascotas = () => {
    contenedorMascota.innerHTML=""

    var calculo = calcularIMC(mascota.peso, mascota.cirPanza, mascota.largoPata)
    console.log(calculo)
    let estadoGato =""
    
    if(calculo <=10){
        estadoGato = "Bajo Peso"
        console.log(estadoGato)
        var ventana = window.open("./gatoflaco.html", "gatoFlaco", "height=700,width=700,left=100,top=100,toolbar=no,menubar=no");
        ventana.mascota=mascota;
           
    }
    else{ if(calculo<=25){
            estadoGato = "Tu gato esta perfecto"
            console.log(estadoGato)
            var ventana=window.open("./gatook.html", "gatoOk", "height=700,width=700,left=100,top=100,toolbar=no,menubar=no");
            ventana.mascota=mascota;
            } 
            else{ 
                estadoGato = "Sobre peso"
                console.log(estadoGato)
                 var ventana=window.open("./gatogordo.html", "gatoGordo", "height=700,width=700,left=100,top=100,toolbar=no,menubar=no");
                ventana.mascota=mascota;
            }
        }    
    
    contenedorMascota.innerHTML += `
    <div class= imc-card>
    <h2>Nombre Mascota: ${mascota.nombreMascota}</h2>
    <p>Cumpleaños: ${mascota.cumpleGato}</p>
    <p>Sexo: ${mascota.sexoMascota}</p>
    <p>Peso: ${mascota.peso}</p>
    <p>Circunsferencia Panza:${mascota.cirPanza}
    <p>Largo Pata: ${mascota.largoPata}</p>
    <p>Resultado IMC: ${calculo.toFixed(2)} </p>
    <p>Estado: ${estadoGato}</p>
                             
        `
        calculo = 0
        estadoGato=""

} 


formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()
   
    mascota.nombreMascota= formularioUsuarios.nombreMascota.value
    mascota.cumpleGato= formularioUsuarios.cumpleGato.value
    mascota.sexoMascota= formularioUsuarios.sexoMascota.value
    mascota.peso= formularioUsuarios.peso.value
    mascota.cirPanza= formularioUsuarios.cirPanza.value
    mascota.largoPata= formularioUsuarios.largoPata.value

    renderzarMascotas()
})


