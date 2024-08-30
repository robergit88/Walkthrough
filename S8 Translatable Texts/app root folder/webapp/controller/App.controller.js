sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
     onInit() {

         // Se establece el modelo de datos sobre la vista
         const oData = {
            recipient : {
               name : "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.getView().setModel(oModel);

         // Se establece el modelo i18n sobre la vista
         const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");
      },

      onShowHello() {
         // Se lee el mensaje desde el modelo i18n
         const oBundle = this.getView().getModel("i18n").getResourceBundle();
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");
         const sMsg = oBundle.getText("helloMsg", [sRecipient]);

         // Se muestra el mensaje
         MessageToast.show(sMsg);
      }
   });
});

// En la función onInit creamos una instancia del ResourceModel que apunta al nuevo archivo 
// de paquete de mensajes donde ahora se encuentran nuestros textos (archivo i18n.properties).
// El nombre del paquete ui5.walkthrough.i18n.i18n consta del espacio de nombres de la aplicación 
// ui5.walkthrough (la raíz de la aplicación tal como se define en index.html), 
// el nombre de la carpeta i18n y finalmente el nombre del archivo i18n sin extensión.
// El tiempo de ejecución de SAPUI5 calcula la ruta correcta al recurso; en este caso la ruta a nuestro 
// archivo i18n.properties. A continuación, la instancia del modelo se configura en la vista como un modelo 
// con nombre con la clave i18n. Utilice modelos con nombre cuando necesite tener varios modelos disponibles 
// en paralelo.

// En la función onShowHello accedemos al modelo i18n para obtener el texto 
// del archivo del paquete de mensajes y reemplazar el marcador de posición {0} con el destinatario 
// de nuestro modelo de datos.
// El método getProperty se puede llamar en cualquier modelo y toma la ruta de datos como argumento.
// Además, el paquete de recursos tiene un método getText específico que toma una serie de cadenas 
// como segundo argumento.

// Se puede acceder al paquete de recursos con el método getResourceBundle de un ResourceModel. 
// En lugar de concatenar textos traducibles manualmente, podemos usar el segundo parámetro de getText 
// para reemplazar partes del texto con datos no estáticos.
// Durante el tiempo de ejecución, SAPUI5 intenta cargar el archivo i18n_*.properties correcto 
// según la configuración de su navegador y su configuración regional.
// En nuestro caso sólo hemos creado un archivo i18n.properties para hacerlo más sencillo. 
// Sin embargo, puede ver en el tráfico de red de las herramientas de desarrollo de su navegador 
// que SAPUI5 intenta cargar uno o más archivos i18n_*.properties antes de recurrir al archivo i18n.properties
// predeterminado.