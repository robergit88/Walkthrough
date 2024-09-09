****************
# Step 6: Modules
****************

En SAPUI5, los recursos a menudo se denominan módulos.


En este paso, reemplazamos la sentencia alert con un mensaje de la biblioteca sap.m.


1. Se modifica el controlador [webapp/controller/App.controller.js](webapp/controller/App.controller.js)

``` js
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"]
  ,(Controller, MessageToast) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {
      onShowHello() {

//       begin delete         
//       alert("Hello World");
//       end delete

 MessageToast.show("Hello World from message toast module");
      }
   });
});
```

### Convenciones
1. #### Utilice sap.ui.define para controladores y todos los demás módulos de JavaScript para definir un espacio de nombres global. Con el espacio de nombres, se puede abordar el objeto en toda la aplicación.
2. #### Utilice sap.ui.require para cargar dependencias de forma asincrónica pero sin declarar un espacio de nombres, por ejemplo, código que solo necesita ejecutarse, pero no necesita ser llamado desde otro código.
3. #### Utilice el nombre del artefacto a cargar para nombrar los parámetros de la función (sin espacio de nombres).