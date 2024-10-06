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

// El archivo "Component.js" contendrá
// la configuración de nuestra aplicación.
// SAPUI5 invoca automáticamente la función 
// de inicio del componente cuando se crea 
// una instancia del componente.
// Nuestro componente hereda de la clase base sap/ui/core/UIComponent, y es obligatorio realizar
// la llamada súper a la función init de la

//clase base en el método init anulado.



