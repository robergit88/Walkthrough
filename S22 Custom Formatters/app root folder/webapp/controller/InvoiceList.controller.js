sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"../model/formatter"
], (Controller, JSONModel,formatter) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit() {

            // Se instancia modelo en formato json con el tipo de moneda
            const oViewModel = new JSONModel({
                currency: "EUR"
            });

            // Se asigna modelo a la vista
            this.getView().setModel(oViewModel, "view");
        }
    });
});

// Para cargar nuestras funciones de formateador, debemos agregarlas a InvoiceList.controller.js. 
// En este controlador, primero agregamos una dependencia a nuestro módulo de formateo personalizado.
// El controlador simplemente almacena las funciones del formateador cargadas
// en el formateador de propiedades local para poder acceder a ellas en la vista.