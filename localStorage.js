let datos = []
    if (localStorage.getItem('producto') == null) {
        localStorage.setItem('producto', JSON.stringify(datos))
        datos = [...datos]
    } else {
        datos = JSON.parse(localStorage.getItem('producto'))
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
        <td>${datos.producto}</td>
        <td>${datos.precio}</td>
    </tr>`
});