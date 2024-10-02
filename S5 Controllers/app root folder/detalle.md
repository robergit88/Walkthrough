********************
# Step 5: Controllers
********************

En este paso, reemplazamos el texto con un botón y cuando se presione el botón mostraremos el mensaje "Hola mundo".

1. Se modifica la vista [webapp/view/App.view.xml](webapp/view/App.view.xml)

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

Tenemos que especificar el nombre del controlador que está conectado a la vista  configurando el atributo **controllerName** de la vista.


Añadimos un botón con el texto "say Hello".


El botón activa la función de controlador de eventos .onShowHello cuando se presiona.


El nombre del controlador es una combinación del espacio de nombres de su aplicación seguido del nombre real del controlador.


Una vista no necesariamente necesita de un controlador asignado a ella. 
Si la vista solo muestra información y no se requiere ninguna funcionalidad adicional, 
entonces no es necesario crear un controlador. 
Si se especifica un controlador, se crea una instancia de él después de cargar la vista.


El manejo del evento clik del botón se implementa en el controlador de la vista.


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


### Convenciones:
1. #### Los nombres de los controladores deben ser capitalizados.
2. #### Los controladores llevan el mismo nombre que la vista relacionada (si hay una relación 1:1).
3. #### Los controladores de eventos tienen el prefijo **on**
4. #### Los nombres de los controladores siempre terminan en ***.controller.js**