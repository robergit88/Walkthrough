sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
         // set data model on view
         const oData = {
            recipient : {
               name : "World from oData model"
            }
         };
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },

      onShowHello() {
         MessageToast.show("Hello World");
      }
   });
});

// Agregamos una función onInit al controlador. Este es uno de los métodos del ciclo de vida de SAPUI5 
// que el marco invoca cuando se crea el controlador, similar al constructor de un control.

// Dentro de la función creamos una instancia de un modelo JSON. 
// Los datos del modelo solo contienen una única propiedad para el "destinatario", 
// y dentro de este también contienen una propiedad adicional para el nombre.

// Para poder utilizar este modelo desde la vista XML, llamamos a la función setModel en la vista 
// y pasamos nuestro modelo recién creado. El modelo ahora está configurado en la vista.

// El mensaje solo muestra el mensaje estático "Hola mundo". 
// Le mostraremos cómo cargar un texto traducido aquí en el siguiente paso.
