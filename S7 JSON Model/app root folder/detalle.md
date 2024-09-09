******************
# Step 7: JSON Model
******************

Ahora que hemos configurado la vista y el controlador, es hora de pensar en la M de MVC.
Esto es el modelo de datos.


Agregaremos un campo de entrada a nuestra aplicación, vincularemos su valor al modelo y
vincularemos el mismo valor a la descripción del campo de entrada.
La descripción se actualizará directamente a medida que el usuario escriba.


Un campo de entrada y una descripción que muestra el valor del campo de entrada.


1. Se modifica el fichero [App.controller.js](webapp/controller/App.controller.js)


``` js
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"]
,(Controller, MessageToast, JSONModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {

      onInit() {
   // se configura modelo local en formato json
         const oData = {
            recipient : {
               name : "World from oData model"
            }
         };

  // se asigna modelo a la vista 
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },

      onShowHello() {
         MessageToast.show("Hello World");
      }
   });
});
```


2. Se modifica el fichero [App.view.xml](webapp/view/App.view.xml)