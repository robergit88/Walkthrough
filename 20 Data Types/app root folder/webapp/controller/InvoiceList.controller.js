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