sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], (Controller) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
       onShowHello() {
          // show a native JavaScript alert
          alert("Hello World from controller class");
       }
    });
 });

// Definimos el controlador de la aplicación en su propio archivo extendiendo 
// el archivo sap/ui/core/mvc/Controller proporcionado por UI5.

// Al principio, contiene solo una función llamada onShowHello que maneja el evento de pulsación 
// del botón mostrando una alerta.