sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
     onInit() {

         // Se establece el modelo de datos sobre la vista
         const oData = {
            recipient : {
               name : "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);

         // Se establece el modelo i18n sobre la vista
         const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello() {
         // Se lee el mensaje desde el modelo i18n
         const oBundle = this.getView().getModel("i18n").getResourceBundle();
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");
         const sMsg = oBundle.getText("helloMsg", [sRecipient]);

         // Se muestra el mensaje
         MessageToast.show(sMsg);
      }
   });
});