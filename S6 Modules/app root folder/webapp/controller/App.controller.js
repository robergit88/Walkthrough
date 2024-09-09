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

// Ampliamos la gama de módulos necesarios con la ruta completa a sap/m/MessageToast.

// Una vez cargados ambos módulos, Controller y MessageToast, se llama a la función de devolución de llamada y podemos hacer uso de ambos objetos accediendo a los parámetros pasados ​​a la función.

// Esta sintaxis de Definición de Módulo Asincrónico (AMD) permite separar claramente la carga del módulo de la ejecución del código y mejora enormemente el rendimiento de la aplicación.

// El navegador puede decidir cuándo y cómo se cargan los recursos antes de la ejecución del código.


