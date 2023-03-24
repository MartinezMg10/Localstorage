// constantes
const formulario = document.querySelector('#formulario')
const table = document.querySelector('#table')
const producto = document.querySelector('#producto')
const precio = document.querySelector('#precio')
// funciones 
const agregar=  () => {
    event.preventDefault()
    table.innerHTML += `
    <div class="border border-2 ">
        <h1 class="text-white text-[30px]">
            ${producto.value}
        </h1>
    </div>
    <div class="border border-2">
        <h1 class="text-white text-[30px]">
            ${precio.value}
        </h1>
    </div>`
    producto.value = ''
    precio.value = ''
}