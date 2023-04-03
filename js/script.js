const formularioUsuarios = document.querySelector(".formularioUsuarios")
const contenedorUsuarios = document.querySelector("#contenedorMascota")
const mascotas =[]

const calcularIMC = () => { 
    let x= this.peso.value
    let y= this.tipoMascota.value
    let z= this.tamanoMascota.value
    let calculo = x/5
    return calculo
}


const renderzarMascotas = () => {
    contenedorMascota.innerHTML=""
   
    for(const mascota of mascotas){
        let calculo = calcularIMC(mascota)
        console.log(calculo)
        contenedorMascota.innerHTML += `
        <div class= imc-card>
        <h2> Nombre Dueño: ${mascota.nombreDueno}</h2>
        <p>Email: ${mascota.email}</p>
        <p>Nombre Mascota: ${mascota.nombreMascota}</p>
        <p>Tipo: ${mascota.tipoMascota}</p>
        <p>Tamaño:${mascota.tamanoMascota}
        <p>peso: ${mascota.peso}
        <p>Resultado IMC: ${calculo} </p>
        
                
        `
    }
} 
formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()
    
    mascotas.push({
        nombreDueno: formularioUsuarios.nombreDueno.value,
        email: formularioUsuarios.email.value,
        nombreMascota: formularioUsuarios.nombreMascota.value,
        tipoMascota: formularioUsuarios.tipoMascota.value,
        tamanoMascota: formularioUsuarios.tamanoMascota.value,
        peso: formularioUsuarios.peso.value,
        })
    renderzarMascotas()
})
