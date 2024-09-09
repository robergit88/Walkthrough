********************
# Step 5: Controllers
********************

En este paso, reemplazamos el texto con un botón y mostramos el mensaje "Hola mundo" cuando se presiona el botón.


El manejo del evento clik del botón se implementa en el controlador de la vista.


1. Se modifica el fichero [webapp/view/App.view.xml](webapp/view/App.view.xml)

``` xml
<mvc:View
   controllerName="ui5.walkthrough.controller.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Button
      text="Say Hello"
      press=".onShowHello"/>
</mvc:View>
```

2. Se crea carpeta 📂 y fichero [webapp/controller/App.controller.js](webapp/controller/App.controller.js)

```js
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
```