fetch('data/datos.json')
    .then(response => response.json())
    .then(data => {
    
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

        const datos = document.getElementById('datos');
        datos.innerHTML = `
            <div class="bg-dark text-white text-center py-4">
                <h4>Contactanos 💌</h4>
                <br>
                <p><strong>Nombre:</strong> ${data.datos_tienda.nombre}</p>
                <p><strong>Correo:</strong> ${data.datos_tienda.correo}</p>
                <p><strong>Teléfono:</strong> ${data.datos_tienda.telefono}</p>
                <p><strong>Dirección:</strong> ${data.datos_tienda.direccion}</p>
                <p><strong>Horarios:</strong> 
                <p>Lunes a Viernes: ${data.datos_tienda.horario_atencion.lunes_a_viernes}</p>
                <p>Sabados: ${data.datos_tienda.horario_atencion.sabados}</p>
                <p>Domingos: ${data.datos_tienda.horario_atencion.domingos}</p>
            </div>
        `;
            const productos = data.productos;
            let productosHTML = '';

            for (let i = 0; i < productos.length; i++) {
                productosHTML += `
                <tr>
                <td>${productos[i].id}</td> 
                <td>${productos[i].nombre}</td>
                <td>${productos[i].categoria}</td>                
                <td>${productos[i].descripcion}</td>
                <td>$${productos[i].precio}</td>
                <td><img src="https://via.placeholder.com/150" alt="Imagen 1" class="img-thumbnail"></td> </tr>
                `;
            } 
            const tablaproductos = document.getElementById('tabla_productos');
            tablaproductos.innerHTML = productosHTML;
        });

        