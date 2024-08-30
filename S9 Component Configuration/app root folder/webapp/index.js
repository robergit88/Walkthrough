sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});

// Ahora creamos un contenedor de componentes en lugar de la vista en nuestro index.js 
// que crea una instancia de la vista según la configuración del componente.

// convenciones
//-------------
// El componente se llama Component.js. 
// Junto con todos los recursos de la interfaz de usuario de la aplicación, el componente se encuentra 
// en la carpeta de la aplicación web. 
// El archivo index.html se encuentra en la carpeta de la aplicación web si se utiliza de forma productiva.