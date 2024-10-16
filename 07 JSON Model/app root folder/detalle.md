******************
# Step 7: JSON Model
******************

Ahora que hemos configurado la vista y el controlador, es hora de pensar en la M de MVC.
Esto es el modelo de datos.


Agregaremos un campo de entrada a nuestra aplicación, vincularemos su valor al modelo y
vincularemos el mismo valor a la descripción del campo de entrada.
La descripción se actualizará directamente a medida que el usuario escriba.


Un campo de entrada y una descripción que muestra el valor del campo de entrada.


1. Se modifica el controlador [App.controller.js](webapp/controller/App.controller.js)


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
Agregamos una función **onInit** al controlador. Este es uno de los métodos del ciclo de vida de SAPUI5 que el sistema invoca cuando se crea un controlador, similar al constructor de un control.

Dentro de la función creamos una instancia de un modelo JSON. 


Los datos del modelo solo contienen una única propiedad para el **"recipient"**, y dentro de este también contienen una propiedad adicional para el **"name"**


Para poder utilizar este modelo en la vista, llamamos a la función setModel y pasamos nuestro modelo recién creado.


El mensaje solo muestra el mensaje estático "Hello world". 

2. Se modifica la vista [App.view.xml](webapp/view/App.view.xml)
``` XML

<mvc:View
   controllerName="ui5.walkthrough.controller.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">

   <Button
      text="Say Hello"
      press=".onShowHello"/>

   <Input
      value="{/recipient/name}"
      description="Hello {/recipient/name}"
      valueLiveUpdate="true"
      width="60%"/>

</mvc:View>
```

Agregamos un control **sap/m/Input** a la vista. Con esto, el usuario puede ingresar un destinatario para los saludos. 


Vinculamos su valor a un modelo SAPUI5 utilizando la sintaxis de vinculación 
declarativa para vistas XML.


Las llaves {...} indican que los datos se toman del valor de la propiedad nombre 
del objeto destinatario. Esto se llama "vinculación de datos".


**/recipient/name** declara la ruta en el modelo.