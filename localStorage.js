let datos = []
    if (localStorage.getItem('productos') == null) {
        localStorage.setItem('productos', JSON.stringify(datos))
        datos = [...datos]
    } else {
        datos = JSON.parse(localStorage.getItem('productos'))
    }

/* if(localStorage.getItem('dato') !== undefined && localStorage.getItem('dato')){
    alert("Datos si existe en localStorage!!");
  //Elimina Sidebar
    localStorage.removeItem('Sidebar');
  } else {
    alert('dato no existe en local storage')
  } */

datos.forEach(element => {
    tbody.innerHTML +=`
    <tr>
        <td>${element.producto}</td>
        <td>${element.precio}</td>
    </tr>`
});