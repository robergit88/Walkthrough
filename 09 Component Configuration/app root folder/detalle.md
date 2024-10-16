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

``` js
sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"], (UIComponent, JSONModel, ResourceModel) => {
   "use strict";

   return UIComponent.extend("ui5.walkthrough.Component", {

//Se configuran metadatos de la aplicación
metadata: {

"interfaces": ["sap.ui.core.IAsyncContentCreation"],

"rootView": {
  "viewName": "ui5.walkthrough.view.App",
            "type": "XML",
            "id": "app"
         }
      },

 
//Se define una función inicializadora del componente
      
init() {

// Llamar a la funcion init padre
UIComponent.prototype.init.apply(this, arguments);

// se configura un modelo de datos
const oData = {
 recipient: {
         name: "World" }
         };

//Se intancia un modelo de datos
         const oModel = new JSONModel(oData);
         this.setModel(oModel);

// Se configura un modelo internacionalización
const i18nModel = new ResourceModel({
bundleName: "ui5.walkthrough.i18n.i18n"
         });
         
this.setModel(i18nModel, "i18n");
      }
   });
});
```



El archivo **Component.js** ahora consta de dos partes:


+ La nueva sección **metadata**


+ La función **init** introducida anteriormente que se llama cuando se inicializa el componente.


La sección **metadata** define una referencia a la vista raíz, de modo que en lugar de mostrar la vista raíz directamente en el archivo **index.js** como lo hicimos anteriormente, el componente ahora administra la visualización de la vista de la aplicación.


También implementa la interfaz **sap.ui.core.IAsyncContentCreation**, que permite crear el componente de forma totalmente asíncrona.


En la función **init** creamos una instancia de nuestro modelo de datos y el modelo **i18n** como lo hicimos antes en el controlador de la aplicación.


**ahora los modelos se configurarán directamente en el componente y no en la vista raíz del componente**.


Sin embargo, como los controles anidados heredan automáticamente los modelos de sus controles principales, los modelos también están disponibles en la vista.



2. Se modifica el fichero [App.controller.js](webapp/controller/App.controller.js)


Se elimina la función **onInit** y los módulos requeridos; esto ahora se hace en el componente.

3. Se modifica el fichero [index.js](webapp/index.js)