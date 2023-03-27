const agregar = document.getElementById('agregar')
const producto = document.getElementById('producto')
const precio = document.getElementById('precio')

class Producto{
    constructor(producto,precio){
        this.producto = producto;
        this.precio = precio;
    }
}

let array = []

agregar.addEventListener('click',()=>{
    if(producto.value != '' && precio.value != ''){
        const nuevoProducto = new Producto(producto.value,precio.value)
        array.push(nuevoProducto)
        console.log(nuevoProducto)
        localStorage.setItem("productos", JSON.stringify(array));


        producto.value=''
        precio.value=''
        location.href='localStorage.html'
    }else{
        alert("Faltan Campos")
    }

})



window.addEventListener("load", ()=> {
    const traerProductos = JSON.parse(localStorage.getItem("productos"));

    if(traerProductos != null){
        traerProductos.forEach(element => {
            let producto = new Producto(element.producto,element.precio)
            array.push(producto)
            console.log(traerProductos)
        } )
    }else{
        console.log("No hay productos guardados")
    }
});