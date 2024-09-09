*****************
# Step 3: Controls
*****************

Es el momento de crear nuestra primera pequeña interfaz de usuario reemplazando el texto "Hola mundo" en el cuerpo HTML por el control SAPUI5 sap/m/Text


Al principio, usaremos la API de control de JavaScript para configurar la interfaz de usuario; 
luego, la instancia de control se coloca en el cuerpo HTML.


El texto "Hola mundo" ahora se muestra mediante un control SAPUI5.

1. Se modifica el fichero [index.html](webapp/index.html)

2. Se modifica el fichero [index.js](webapp/index.js)
``` js
sap.ui.define(["sap/m/Text"], 
    (Text) => {
    "use strict";

new Text({ text: "Hello World from text control"}).placeAt("content"); 
});
```