******************
# Step 2: Bootstrap
******************

Antes de que podamos hacer algo con SAPUI5, debemos cargar e inicializar la aplicación.


Este proceso se llama bootstrapping o arranque.


Una vez finalizado este arranque, simplemente mostramos una alerta.

1. Se modifica el fichero [webapp/index.html](webapp/index.html)

``` XML
<!DOCTYPE html>
<html>

<head>
        <meta charset="utf-8">
        <title>UI5 Walkthrough</title>
        <script id="sap-ui-bootstrap" src="resources/sap-ui-core.js" data-sap-ui-theme="sap_horizon"
                data-sap-ui-libs="sap.m" data-sap-ui-compat-version="edge" data-sap-ui-async="true"
                data-sap-ui-on-init="module:ui5/walkthrough/index" data-sap-ui-resource-roots='{
                        "ui5.walkthrough": "./" }'>
                        </script>
</head>

<body>
        <div>Hello World</div>
</body>

</html>
```


2. Se crea el fichero [webapp/index.js](webapp/index.js)

``` js
sap.ui.define([], () => {
    "use strict";
    alert("UI5 is ready");
});
```