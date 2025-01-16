
// Obtenemos los productos de la API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    // Creamos un contenedor para los productos
    const productosContainer = document.querySelector('.productos-container');
    // Recorremos los productos y creamos un elemento para cada uno
    products.forEach(product => {
      const productoElement = document.createElement('div');
      productoElement.classList.add('producto');
      productoElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Precio: $${product.price}</p>
        <button class="agregar-carrito">Agregar al carrito</button>
      `;

      // Agregamos el evento de clic al botón de agregar al carrito
      productoElement.querySelector('.agregar-carrito').addEventListener('click', () => {
        // Obtenemos la información del producto
        const producto = {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image
        };

        // Agregamos el producto al carrito
        agregarAlCarrito(producto);
      });

      // Agregamos el elemento del producto al contenedor
      productosContainer.appendChild(productoElement);
    });
  });

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Obtenemos el carrito
  const carrito = obtenerCarrito();

  // Verificamos si el producto ya está en el carrito
  if (carrito[producto.id]) {
    // Si ya está, incrementamos la cantidad
    carrito[producto.id].cantidad++;
  } else {
    // Si no está, agregamos el producto al carrito
    carrito[producto.id] = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      image: producto.image,
      cantidad: 1
    };
  }

  // Guardamos el carrito en el localStorage
  guardarCarrito(carrito);

  // Actualizamos la lista del carrito
  actualizarListaCarrito();
}

// Función para obtener el carrito del localStorage
function obtenerCarrito() {
  const carrito = localStorage.getItem('carrito');
  return carrito ? JSON.parse(carrito) : {};
}

// Función para guardar el carrito en el localStorage
function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para actualizar la lista del carrito
function actualizarListaCarrito() {
  // Obtenemos el carrito
  const carrito = obtenerCarrito();

  // Obtenemos la lista del carrito
  const listaCarrito = document.querySelector('.carrito-lista');

  // Limpiamos la lista del carrito
  listaCarrito.innerHTML = '';
  // Recorremos el carrito y creamos un elemento para cada producto
 //total 
 let total = 0;
  Object.values(carrito).forEach(producto => {
    const productoElement = document.createElement('li');
    productoElement.innerHTML = `
      <img src="${producto.image}" alt="${producto.title}">
      <h3>${producto.title}</h3>
      <p>Cantidad: ${producto.cantidad}</p>
      <p>Precio: $${producto.price}</p>
      <button class ="eliminar-producto" data-id="${producto.id}">ELIMINAR</button>
    `;

    productoElement.querySelector('.eliminar-producto').addEventListener('click',()=>{
        eliminarProductoDelCarrito(producto.id);
    });
    // Agregamos el elemento del producto a la lista del carrito
    listaCarrito.appendChild(productoElement);
                //calculo de total
                total += producto.price*producto.cantidad;
  });
  
  //Actualizamos el total del carrito

  const totalElement = document.createElement('p');
  totalElement.textContent=`Total: $${total.toFixed(2)}`;
  totalElement.classList.add('total-carrito');
  listaCarrito.appendChild(totalElement);

  // Actualizamos el contador del carrito
  const contadorCarrito = document.querySelector('.carrito-count');
  contadorCarrito.textContent = Object.values(carrito).reduce((acc, producto) => acc + producto.cantidad, 0);
}

//Eliminar carrito
function eliminarProductoDelCarrito(id){
    const carrito = obtenerCarrito();
    if(carrito[id].cantidad>1){
        carrito[id].cantidad--;
    }else{
    delete carrito[id];
    }
    guardarCarrito(carrito);
    actualizarListaCarrito();
}

// Agregamos el evento de clic al botón del carrito
document.querySelector('.carrito-button').addEventListener('click', () => {
  // Obtenemos la lista del carrito
  const listaCarrito = document.querySelector('.carrito-desplegable');

  // Mostramos o ocultamos la lista del carrito
  listaCarrito.style.display = listaCarrito.style.display === 'block' ? 'none' : 'block';
});
