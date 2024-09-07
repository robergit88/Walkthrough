sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.App", {

		onShowHello() {

			// se instancia un modelo internacionalización
			const oBundle = this.getView().getModel("i18n").getResourceBundle();

			//se configura destinatario del modelo
			const sRecipient = this.getView().getModel().getProperty("/recipient/name");

			//se compone string mensaje
			const sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// Se muestra mensaje
			MessageToast.show(sMsg);
		}
	});
});

// Se elimina la función onInit y los módulos requeridos;
// esto ahora se hace en el componente.