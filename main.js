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
    selectTruckFunction()
    listen()
    console.log('Ya esta todo cargado')
  });
}

const selectTruckFunction = () => {
  trucks.forEach((item) => {
    const optionTruck = document.createElement('option')
    optionTruck.value = item.id
    optionTruck.textContent = item.marca
    fragment.appendChild(optionTruck)
    selectTruck.appendChild(fragment)
    selectColorFunction(item)
  }) 
}

const selectColorFunction = (valueItem) => {
  valueItem.color.forEach((color) => {
    const optionColor = document.createElement('option')
    optionColor.textContent = color
    optionColor.value = valueItem.id
    fragment.appendChild(optionColor)
    selectColor.appendChild(fragment)
  })
}

const listen = () => {
  selectTruck.addEventListener('change', (e) => {
    const valueId = e.target.value
    changeColor(valueId)
  })
}

const changeColor = (idTruck) => {
  selectColor.value = idTruck 
}

init()


