sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], (UIComponent, JSONModel) => {
   "use strict";

   return UIComponent.extend("ui5.walkthrough.Component", {

// Se configuran metadatos de la aplicacion.
// En la sección de metadatos del componente, ahora reemplazamos la propiedad rootView con el manifiesto
// Esto define una referencia al descriptor que se cargará y analizará automáticamente cuando se cree 
// una instancia del componente.      
      metadata : {
         interfaces: ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"
      },

      init() {

         // Se llama a la función init de la clase padre
         UIComponent.prototype.init.apply(this, arguments);

         // se define un modelo de datos local
         const oData = {
            recipient : {
               name : "World"
            }
         };

         // Se instancia un modelo de datos en el componente
         const oModel = new JSONModel(oData);
         this.setModel(oModel);
      }
   });
});

// Ahora podemos eliminar por completo las líneas de código que contienen la creación de instancias del 
// modelo para nuestro paquete de recursos. SAPUI5 lo hace automáticamente con la ayuda de las entradas 
// de configuración en el descriptor.
// También podemos eliminar la dependencia de sap/ui/model/resource/ResourceModel y el parámetro formal 
// correspondiente ResourceModel porque no usaremos esto dentro de nuestra función de devolución de llamada 
// anónima.

// Convenciones
// --------------
// El archivo descriptor se denomina manifest.json y se encuentra en la carpeta de la aplicación web.

// Utilice cadenas traducibles para el título y la descripción de la aplicación.



