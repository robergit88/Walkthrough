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
