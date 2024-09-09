sap.ui.define([], () => {
	"use strict";

	return {
		statusText(sStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return oResourceBundle.getText("invoiceStatusA");
				case "B":
					return oResourceBundle.getText("invoiceStatusB");
				case "C":
					return oResourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		}
	};
});

// Creamos un nuevo modelo de carpeta en nuestro proyecto de aplicación. 
// El nuevo archivo de formateador se coloca en la carpeta del modelo de la aplicación, 
// porque los formateadores trabajan en las propiedades de los datos y les dan formato 
// para mostrarlos en la interfaz de usuario. 
// Hasta ahora no teníamos ningún artefacto relacionado con el modelo, excepto el archivo Invoices.json,
// ahora agregaremos la carpeta webapp/model a nuestra aplicación. 
// Esta vez no nos extendemos desde ningún objeto base, 
// sino que simplemente devolvemos un objeto JavaScript con nuestras 
// funciones de formateo dentro de sap.ui.define

// La función statusText obtiene el estado técnico del modelo de datos 
// como parámetro de entrada y devuelve el texto correcto legible por humanos 
// del archivo ResourceBundle.

// Accedemos al modelo de datos a través del componente usando this.getOwnerComponent().getModel() 
// en lugar de usar this.getView().getModel(). 
// La última llamada podría devolver un valor indefinido, 
// porque es posible que la vista aún no se haya adjuntado al componente y, por lo tanto, 
// la vista no puede heredar un modelo del componente.

