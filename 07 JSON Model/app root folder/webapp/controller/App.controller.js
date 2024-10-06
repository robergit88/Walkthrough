sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      

onInit() {

         //se define una estructura en js
         const oData = {
            recipient : {
               name : "World from oData model"
            }
         };

        // set data model on view
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },

      
onShowHello() {
   MessageToast.show("Hello World");
      }
   });
});

