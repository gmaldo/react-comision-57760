# Ecommerce curso CoderHouse

## Descripción
Este proyecto es un sitio de ecommerce desarrollado como parte de la Comisión 57760 del curso de Coderhouse. El objetivo es proporcionar una experiencia completa de compra, permitiendo a los usuarios explorar productos, agregarlos al carrito y realizar compras.

## Demo
![Demo](https://github.com/gmaldo/react-comision-57760/raw/main/public/data/demo.gif)

En el demo podemos apreciar el funcionamiento del sitio:
- Una vista del listado de productos
- El filtrado de productos por categorias
- Agregar un producto al carrito
- Eliminar un producto del carrito
- Generacion de Orden
- Recepcion del numero de orden

## Tecnologías Utilizadas
- **React + Vite**: Usado como herramienta de construcción para construir la interfaz de usuario con componentes reutilizables.
- **React-Router-Dom**: Manejo de rutas en la aplicación.
- **Firebase**: Backend como servicio almacenamiento de datos.
- **Bootstrap**: Framework de CSS para diseño responsivo y componentes predefinidos.
- **Sweetalert2**: Framework para mostrar alertas.

## Estrucutra del proyecto
### Componentes
- ```ItemListContainer``` Es el encargado de mostrar la lista de productos contiene la logica de traer todos los productos o filtrados por categoría. Tiene como hijo a ```ItemList``` que es cada producto, luego estos se renderizan en ```Item```
- ```ItemDetailContainer``` Es el encargado de traer un producto en particular y tiene la logica si lo encuentra o no. Si lo encuentra muestra un componente ```ItemDetail``` donde esta toda la descripción del producto. Este ultimo tiene un ```ItemCount``` que premite seleccionar la cantidad de elementos a agregar al carrito. Mediante ```CartContext``` se manejan los productos agregados al carrito
- ```Navbar``` Se muestra en toda la aplicacion tiene un componente ```CartWidget``` que muestra la cantidad de productos en el carrito obteniendo los datos a través de ```CartContext```. Pide las categorias desde el backend y las muestra en una lista desplegable.
- ```CartItemContainer``` es un conjunto de ```CartItem``` donde se muestra cada producto en el carrito, mediante ```CartContext``` se maneja toda la logica de eliminar productos del carrito.
- ```Checkout``` tiene la logica de generacion de una orden. Contiene un ```CheckoutForm``` que es un formulario que pide la informacion al usuario y la valida. Genera la orden y se escribe en el BackEnd, entrega una alerta con el numero de orden generado.
### Logica de Firestore
Hay 3 colecciones:
- ```products``` donde se encuentra en cada documento un producto, contiene los campos title del producto, stock, ruta a la imagen, descripción, precio y categoria.
![Products](https://github.com/gmaldo/react-comision-57760/raw/main/public/data/products.png)
- ```categories``` donde cada documento solo esta el nombre de la categoria, solo contiene el title de la categoria
![Categories](https://github.com/gmaldo/react-comision-57760/raw/main/public/data/categories.png)
- ```orders``` donde cada documento es una order generada por la aplicacion
![Orider](https://github.com/gmaldo/react-comision-57760/raw/main/public/data/orders.png)


## Características
- Navegación de productos por categorías.
- Sistema de carrito de compras.
- Simulacion de compra y generacion de una orden
- Diseño responsivo adaptado a diferentes dispositivos.

## Instalación
Para poner en marcha el proyecto, sigue estos pasos:

1. Clona el repositorio:
https://github.com/gmaldo/react-comision-57760.git
2. Instala las dependencias:
npm install
3. Inicia el proyecto:
npm run dev

## Uso 
El sitio está desplegado y puedes acceder a él directamente en [react-comision-57760.vercel.app](https://react-comision-57760.vercel.app).
Para desarrollo local, navega a `http://localhost:5173/` después de iniciar el proyecto para comenzar a explorar productos y realizar compras.

## Autor
- Gustavo Maldonado
