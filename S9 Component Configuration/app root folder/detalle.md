********************************
# Step 9: Component Configuration
********************************

### Después de haber introducido las tres partes del concepto Modelo-Vista-Controlador (MVC), 
llegamos a otro aspecto estructural importante de SAPUI5.


### En este paso, encapsularemos todos los recursos de la interfaz de usuario en un componente 
que es independiente de nuestro archivo index.html.


### Los componentes son piezas independientes y reutilizables que se utilizan en aplicaciones SAPUI5.


### Siempre que accedamos a recursos, ahora lo haremos en relación con el componente 
(en lugar de en relación con index.html).


### Este cambio de arquitectura permite que nuestra aplicación se utilice en entornos más flexibles
que nuestra página index.html estática, como en un contenedor circundante como la plataforma de lanzamiento de SAP Fiori.
 
(sin cambios visuales en el último paso).


1. Se crea el fichero [Component.js](webapp/Component.js)

2. Se modifica el fichero [App.controller.js](webapp/controller/App.controller.js)

3. Se modifica el fichero [index.js](webapp/index.js)