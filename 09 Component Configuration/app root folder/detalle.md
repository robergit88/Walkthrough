********************************
# Step 9: Component Configuration
********************************

Después de haber introducido las tres partes del concepto **Modelo-Vista-Controlador (MVC)**, llegamos a otro aspecto estructural importante de SAPUI5.


En este paso, encapsularemos todos los recursos de la interfaz de usuario en un componente que es independiente de nuestro archivo **index.html**.


Los componentes son piezas independientes y reutilizables que se utilizan en aplicaciones SAPUI5.


Siempre que accedamos a recursos, ahora lo haremos en relación con el componente 
(en lugar de en relación con index.html).


Este cambio de arquitectura permite que nuestra aplicación se utilice en entornos más flexibles que nuestra página index.html estática, como en un contenedor circundante de la plataforma de lanzamiento de SAP Fiori.



1. Se crea el fichero [Component.js](webapp/Component.js)


El archivo **Component.js** ahora consta de dos partes:


+ La nueva sección de metadatos


+ La función init introducida anteriormente que se llama cuando se inicializa el componente.


La sección de metadatos define una referencia a la vista raíz, de modo que en lugar de mostrar la vista raíz directamente en el archivo index.js como lo hicimos anteriormente, el componente ahora administra la visualización de la vista de la aplicación.


También implementa la interfaz **sap.ui.core.IAsyncContentCreation**, que permite crear el componente de forma totalmente asíncrona.


En la función **init** creamos una instancia de nuestro modelo de datos y el modelo i18n como lo hicimos antes en el controlador de la aplicación.


<ins>Tenga en cuenta que ahora los modelos se configurarán directamente en el componente y no en la vista raíz del componente</ins>.


Sin embargo, como los controles anidados heredan automáticamente los modelos de sus controles principales, los modelos también están disponibles en la vista.

2. Se modifica el fichero [App.controller.js](webapp/controller/App.controller.js)


Se elimina la función onInit y los módulos requeridos; esto ahora se hace en el componente.

3. Se modifica el fichero [index.js](webapp/index.js)