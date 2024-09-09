****************
# Step 6: Modules
****************

En SAPUI5, los recursos a menudo se denominan módulos.


En este paso, reemplazamos la sentencia alert con un mensaje de la biblioteca sap.m.


1. Se modifica el controlador [webapp/controller/App.controller.js](webapp/controller/App.controller.js)

``` js
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], (Controller, MessageToast) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onShowHello() {

//       begin delete         
//       Se muestra alerta de javascript nativo
//          alert("Hello World");
//       end delete

         MessageToast.show("Hello World from message toast module");
      }
   });
});
```