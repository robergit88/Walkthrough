sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], (UIComponent, JSONModel) => {
   "use strict";

   return UIComponent.extend("ui5.walkthrough.Component", {
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

         // Se configura un modelo de datos sobre el componente
         const oModel = new JSONModel(oData);
         this.setModel(oModel);

         // Se instancia enrutador de vistas basadas en la URL/hash
			this.getRouter().initialize();

      }
   });
});