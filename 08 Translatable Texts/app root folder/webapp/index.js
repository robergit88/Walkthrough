sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";
	XMLView.create({
		viewName: "ui5.walkthrough.view.App"
	}).then((oView) => oView.placeAt("content"));
});

//En este paso movemos los textos de nuestra interfaz de usuario a un archivo de recursos separado.

// De esta manera, todos están en un lugar central y pueden traducirse fácilmente a otros idiomas. 
// Este proceso de internacionalización (en resumen, i18n) se logra en SAPUI5 mediante 
// el uso de un modelo de recursos especial y la sintaxis de enlace de datos estándar,
// pero sin un carácter "/" precedente.
