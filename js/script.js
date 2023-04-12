const formularioUsuarios = document.querySelector(".formularioUsuarios")
const contenedorUsuarios = document.querySelector("#contenedorMascota")
const mascotas =[]

const calcularIMC = () => { 
    let x= this.peso.value
    let y= this.cirPata.value
    let z= this.largoPata.value
    let calculo = ((((y/0,70622)-z)/0,9156)-z)
    return calculo
}


const renderzarMascotas = () => {
    contenedorMascota.innerHTML=""
   
    for(const mascota of mascotas){
        let calculo = calcularIMC(mascota)
        console.log(calculo)
        
        contenedorMascota.innerHTML += `
        <div class= imc-card>
        <h2> Nombre Mascota: ${mascota.nombreMascota}</h2>
        <p>Cumpleaños Mascota: ${mascota.cumpleGato}</p>
        <p>Nombre Mascota: ${mascota.sexoMascota}</p>
        <p>Peso: ${mascota.peso}</p>
        <p>Circunsferencia Pata:${mascota.cirPata}
        <p>Largo Pata: ${mascota.largoPata}</p>
        <p>Resultado IMC: ${calculo} </p>
                     
        `
        calculo = 0
    }
} 
formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()
    
    mascotas.push({
        nombreMascota: formularioUsuarios.nombreMascota.value,
        cumpleGato: formularioUsuarios.cumpleGato.value,
        sexoMascota: formularioUsuarios.sexoMascota.value,
        peso: formularioUsuarios.peso.value,
        cirPata: formularioUsuarios.cirPata.value,
        largoPata: formularioUsuarios.largoPata.value,
        })
    renderzarMascotas()
})


