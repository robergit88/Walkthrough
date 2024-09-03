sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
 ], (Controller, MessageToast) => {
	"use strict";
 
	return Controller.extend("ui5.walkthrough.controller.App", {

	   onShowHello() {
		
		  // Se compone mensaje desde modelo i18n
		  const sRecipient = this.getView().getModel().getProperty("/recipient/name");
		  const oBundle = this.getView().getModel("i18n").getResourceBundle();
		  const sMsg = oBundle.getText("helloMsg", [sRecipient]);
 
		  // Se muestra el mensaje
		  MessageToast.show(sMsg);
	   }
	});
 });
 
// Eliminamos la función onInit y los módulos requeridos; esto ahora se hace en el componente.