******************
# Step 2: Bootstrap
******************

Antes de que podamos hacer algo con SAPUI5, debemos cargar e inicializar la aplicación.


Este proceso se llama bootstrapping o arranque.


Una vez finalizado este arranque, simplemente mostramos una alerta.

1. Se modifica el fichero [webapp/index.html](webapp/index.html)

2. Se crea el fichero [webapp/index.js](webapp/index.js)

``` js
sap.ui.define([], () => {
    "use strict";
    alert("UI5 is ready");
});
```