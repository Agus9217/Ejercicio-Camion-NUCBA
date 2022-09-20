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
const printName = document.getElementById('truck-name')
const printColor = document.getElementById('truck-color')
const button = document.getElementById('btn-color')
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
        const optionId = e.target.selectedIndex + 1
        searchTruck(optionId)
    })

}

const printTruck = (truck, option) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        printName.innerHTML = `${ truck.marca }`
        selectColor.remove(option)
    })

}

const searchTruck = (valueId) => {
    const filterTruck = trucks.find(item => item.id === valueId)
    if(filterTruck.id !== valueId){
        console.log('No hay nada')
    } else {
        filterTruck.color.forEach((color) => {
            console.log(color)
            const optionColor = document.createElement('option')
            optionColor.textContent = color
            selectColor.appendChild(optionColor)
            printTruck(filterTruck, optionColor)
        })
    }

}




init()