sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
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

         // se configura un modelo de datos estructurado en formato json
         const oData = {
            recipient: {
               name: "World"
            }
         };

         //Se intancia un modelo de datos
         const oModel = new JSONModel(oData);
         this.setModel(oModel);

         // Se configura un modelo de internacionalización
         const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
      }
   });
});

// Creamos un archivo "Component.js" en la carpeta de la aplicación web que contendrá
// la configuración de nuestra aplicación.
// SAPUI5 invoca automáticamente la función de inicio del componente cuando se crea una instancia
// del componente.
// Nuestro componente hereda de la clase base sap/ui/core/UIComponent, y es obligatorio realizar
// la llamada súper a la función init de la clase base en el método init anulado.

// El archivo Component.js ahora consta de dos partes: la nueva sección de metadatos y la función init
// introducida anteriormente que se llama cuando se inicializa el componente.

// La sección de metadatos define una referencia a la vista raíz, de modo que en lugar de mostrar la vista raíz
// directamente en el archivo index.js como lo hicimos anteriormente, el componente ahora administra
// la visualización de la vista de la aplicación.
// También implementa la interfaz sap.ui.core.IAsyncContentCreation, que permite crear el componente
// de forma totalmente asíncrona.

// En la función init creamos una instancia de nuestro modelo de datos y el modelo i18n como lo hicimos antes
// en el controlador de la aplicación. Tenga en cuenta que los modelos se configuran directamente
// en el componente y no en la vista raíz del componente. Sin embargo, como los controles anidados heredan
// automáticamente los modelos de sus controles principales, los modelos también están disponibles en la vista.



