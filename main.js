const trucks = [
    {
        id: 1,
        marca: "Volvo",
        color: ["Rojo", "Amarillo", "Azul", "Negro", "Blanco"],
        precio: 1000000
    },
    {
        id: 2,
        marca: "Mercedez-Benz",
        color: ["Azul", "Negro"],
        precio: 1500000
    },
    {
        id: 3,
        marca: "Cheverolet",
        color: ["Rojo", "Amarillo", "Azul", "Negro", "Blanco"],
        precio: 1200000
    },
    {
        id: 4,
        marca: "Ford",
        color: ["Rojo", "Amarillo"],
        precio: 2000000
    },
    {
        id: 5,
        marca: "Scania",
        color: ["Gris", "Naranja", "Azul"],
        precio: 3000000
    }
]

const selectTruck = document.getElementById('select-truck')
const selectColor = document.getElementById('select-color')
const fragment = document.createDocumentFragment();



const init = () => {
    window.addEventListener('DOMContentLoaded', () => {
        trucks.forEach((item) => {
            const option = document.createElement('option')
            const marca = item.marca
            const idTruck = item.id
            option.value = idTruck
            option.textContent = marca
            fragment.appendChild(option)
            selectTruck.appendChild(fragment)
        })
        listen()
    })

}

const listen = () => {
    selectTruck.addEventListener('change', (e) => {
        console.log(e.target.selectedIndex + 1)
        const optionId = e.target.selectedIndex + 1
        searchTruck(optionId)
    })
}


const searchTruck = (valueId) => {
    const filterTruck = trucks.find(item => item.id === valueId)
    if(!filterTruck === valueId){
        console.log('No hay nada')
    } else {
        const optionColor = document.createElement('option')
        optionColor.textContent = `${filterTruck.color}`
        optionColor.value = `${filterTruck.color}`
        selectColor.appendChild(optionColor)
    }
}

init()