sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
        
       onShowHello() {

          // read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);
 
          // show message
          MessageToast.show(sMsg);
       },

       async onOpenDialog() {
         // create dialog lazily
         this.oDialog ??= await this.loadFragment({
             name: "ui5.walkthrough.view.HelloDialog"
         });
     
         this.oDialog.open();
     }

    });
 });

//  Usando async/await, manejamos la apertura del diálogo de forma asincrónica cada vez que se activa 
//  el evento.
// Si el fragmento de diálogo aún no existe, se crea una instancia del fragmento llamando a la API 
// loadFragment. Luego almacenamos el cuadro de diálogo en la instancia del controlador. 
// Esto nos permite reutilizar el diálogo cada vez que se activa el evento.

// TIP
// Para reutilizar la funcionalidad de apertura y cierre de diálogos en otros controladores, 
// puede crear un nuevo archivo ui5.walkthrough.controller.BaseController, 
// que extiende sap.ui.core.mvc.Controller, y colocar toda la codificación relacionada 
// con los diálogos en este controlador. Ahora, todos los demás controladores pueden extenderse 
// desde ui5.walkthrough.controller.BaseController en lugar de sap.ui.core.mvc.Controller.