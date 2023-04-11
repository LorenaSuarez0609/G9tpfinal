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
const contenedorHTML = document.getElementById("selectRazas")

const URL_API_RAZA = "https://api.thecatapi.com/v1/images/search?breed_ids="   /* id y url */
const  URL_API =" https://api.thecatapi.com/v1/breeds"     /* id, name, description, life_span */

fetch(URL_API)
.then(response => response.json())
.then(gatos => {

        for(const razas of gatos){
         contenedorHTML.innerHTML += `
         <option value= "${razas.id}" data-info= "nombre":'{${razas.name},"descripcion":${razas.description},"anos:"${razas.life_span}}'>${razas.name}</option> 
        ` 

    }

})

function mostrarRaza(){
    const listaDesplegable = document.getElementById("selectRazas")
    const cardGatoHTML = document.getElementById("contenedorRaza")

    const buscar = URL_API_RAZA+listaDesplegable.value
    cardGatoHTML.innerHTML=`` 

    fetch(buscar)
    .then(response => response.json())
    .then(gato =>{

            var caturl = gato.url
            cardGatoHTML.innerHTML +=`
            <div class="cardGato">
           
            <img src=${gato[0].url}>
            </div>`      

    }) 

}