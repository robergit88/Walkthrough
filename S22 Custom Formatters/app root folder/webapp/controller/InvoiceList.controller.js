sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {

        formatter: formatter,

        onInit() {

            // Se instancia modelo local con el tipo de moneda en formato json
            const oViewModel = new JSONModel({ currency: "EUR" });

            // Se asigna modelo a la vista
            this.getView().setModel(oViewModel, "view");
        }
    });
});