sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {

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

// Para poder acceder al código de moneda que no forma parte de nuestro modelo de datos, 
// definimos un modelo de vista en el controlador de la lista de facturas. 
// Es un modelo JSON simple con una sola moneda clave y el valor EUR. 
// Esto se puede vincular al formateador del campo numérico. 
// Los modelos de vista pueden contener cualquier opción de configuración asignada a un control
// para vincular propiedades como la visibilidad.

// Convenciones
// -------------

// Utilice tipos de datos en lugar de formateadores personalizados siempre que sea posible.