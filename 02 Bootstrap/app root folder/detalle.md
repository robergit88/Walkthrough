******************
# Step 2: Bootstrap
******************

Antes de que podamos hacer algo con SAPUI5, debemos cargar e inicializar la aplicación.


Este proceso se llama arranque o
bootstrapping.

Una vez finalizado este arranque, simplemente mostramos una alerta.

1. Se modifica el fichero [webapp/index.html](webapp/index.html)

``` XML
<!DOCTYPE html>
<html>

<head>

 <meta charset="utf-8">

 <title>UI5 Walkthrough</title>

 <script

id="sap-ui-bootstrap" 

src="resources/sap-ui-core.js"       

data-sap-ui-theme="sap_horizon"

data-sap-ui-libs="sap.m" 

data-sap-ui-compat-version="edge" 

data-sap-ui-async="true"

   
data-sap-ui-on-init=

"module:ui5/walkthrough/index" 

data-sap-ui-resource-roots='{
 "ui5.walkthrough": "./" }'>

</script>

</head>

<body>
   <div>Hello World</div>
</body>

</html>
```


En este paso, cargamos el marco SAPUI5 desde el servidor web proporcionado por UI5 Tooling 
e inicializamos los módulos principales con las siguientes opciones de configuración:


El atributo id de la etiqueta <script> debe ser exactamente "sap-ui-bootstrap" 
para garantizar el inicio adecuado del tiempo de ejecución de SAPUI5.


Los controles SAPUI5 admiten diferentes temas. 
Elegimos sap_horizon como nuestro tema predeterminado.


Especificamos la biblioteca de UI requerida sap.m, que contiene los controles de UI que necesitamos para este tutorial.


Para hacer uso de la funcionalidad más reciente de SAPUI5, 
definimos la versión de compatibilidad como edge.


Configuramos el proceso de arranque para que se ejecute de forma asíncrona. 
Esto significa que los recursos SAPUI5 se pueden cargar simultáneamente en segundo plano 
por motivos de rendimiento.


Definimos el módulo a cargar inicialmente de forma declarativa. 
Con esto evitamos el código JavaScript directamente ejecutable en el archivo HTML. 
Esto hace que su aplicación sea más segura. 
Crearemos el script al que esto hace referencia más adelante en este paso.


Le decimos al núcleo de SAPUI5 que los recursos en el espacio de nombres ui5.walkthrough 
se encuentran en la misma carpeta que index.html.



2. Se crea el fichero [webapp/index.js](webapp/index.js)



``` js
sap.ui.define([], () => {
    "use strict";
    alert("UI5 is ready");
});
```


El fichero script contiene la lógica de la aplicación para este paso del tutorial


Hacemos esto para evitar tener código ejecutable directamente en el archivo HTML por razones de seguridad.

 
Este script se llamará desde index.html
Lo definimos allí como un módulo de forma declarativa.