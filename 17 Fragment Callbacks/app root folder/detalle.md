********************************
# Step 17: Fragment Callbacks
********************************
Ahora que hemos integrado el cuadro de diálogo, es hora de agregar algo de interacción del usuario.


El usuario definitivamente querrá cerrar el cuadro de diálogo nuevamente en algún momento, 
por lo que añadimos un botón para cerrar el cuadro de diálogo y asignamos un controlador de eventos.


El cuadro de diálogo ahora tiene un botón "Ok".


1. Se modifica el fichero [webapp/controller/HelloPanel.controller.js](webapp/controller/HelloPanel.controller.js)

``` js
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
     },

     onCloseDialog() {
// Nota: No necesitamos encadenarnos a la promesa pDialog, 
//       ya que este controlador de eventos solo se llama desde dentro del propio diálogo cargado.
        this.byId("helloDialog").close();
     }

    });
 });
```


La función del controlador de eventos se coloca en el mismo archivo del controlador y 
cierra el cuadro de diálogo utilizando la función **byId** para obtener la instancia 
del cuadro de diálogo y la función cerrar para cerrar el cuadro de diálogo.


2. Se modifica el fichero [webapp/view/HelloDialog.fragment.xml](webapp/view/HelloDialog.fragment.xml)

``` xml
<core:FragmentDefinition
   xmlns="sap.m"
   xmlns:core="sap.ui.core">
   <Dialog
      id="helloDialog"
      title ="Hello {/recipient/name}">
      <beginButton>
         <Button
            text="{i18n>dialogCloseButtonText}"
            press=".onCloseDialog"/>
      </beginButton>
   </Dialog>
</core:FragmentDefinition>
```


Añadimos un botón a la agregación **beginButton** del cuadro de diálogo.


El controlador de pulsación hace referencia a un controlador de eventos llamado **.onCloseDialog**


Al utilizar la función **loadFragment** para crear el contenido del fragmento, el método se invocará allí cuando se presione el botón.


El cuadro de diálogo tiene una agregación denominada **beginButton** y **endButton**. La colocación de botones en ambas agregaciones garantiza que **beginButton** se coloque antes que **endButton** en la interfaz de usuario.


Sin embargo, lo que significa **before** depende de la dirección del texto del idioma actual.
Por lo tanto, utilizamos los términos **begin** y **end** como sinónimos de **"izquierda"** y **"derecha"**.


En idiomas con dirección de izquierda a derecha, **beginButton** se representará a la **izquierda** y **endButton** al lado *derecho** del pie de página del cuadro de diálogo; en el modo de derecha a izquierda para idiomas específicos, el orden se invierte.



3. Se modifica el fichero [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)


``` js
# App Descriptor
appTitle=Hello World
appDescription=A simple walkthrough app that explains the most important concepts of SAPUI5

# Hello Panel
showHelloButtonText=Say Hello
helloMsg=Hello {0}
homePageTitle=Walkthrough
helloPanelTitle=Hello World
openDialogButtonText=Say Hello With Dialog
dialogCloseButtonText=Ok
```


Se añade nuevo texto para el botón de cerrar el cuadro de diálogo.