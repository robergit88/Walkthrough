*******************
# Step 8: Translatable Texts
*******************

En este paso movemos los textos de nuestra interfaz de usuario a un archivo de recursos separado.


De esta manera, todos están en un lugar central y pueden traducirse fácilmente a otros idiomas. 
Este proceso de internacionalización (en resumen, i18n) se logra en SAPUI5 mediante el uso de un modelo de recursos especial y la sintaxis de enlace de datos estándar, pero sin un carácter "/" precedente.


Creamos la carpeta webapp/i18n y dentro el archivo i18n.properties.

``` js
showHelloButtonText=Say Hello
helloMsg=Hello {0}
```



El nombre del paquete resuelto es u **i5.walkthrough.i18n**, como veremos más adelante
El archivo de propiedades de textos contiene pares de nombre-valor para cada elemento. 
Puede agregar cualquier cantidad de parámetros a los textos agregándoles números entre llaves
Estos números corresponden a la secuencia en la que se accede a los parámetros (comenzando por 0).

En este tutorial solo tendremos un archivo de propiedades.
Sin embargo, en proyectos del mundo real, tendría un archivo separado para cada idioma admitido 
con un sufijo para la configuración regional.
por ejemplo, **i18n_de.properties** para alemán, **i18n_en.properties** para inglés, etc. 
Cuando un usuario ejecuta la aplicación, SAPUI5 cargará el archivo de idioma que mejor se adapte al entorno del usuario.

1. se crea carpeta 📂 y fichero [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)

2. Se modifica el controlador [webapp/controller/ App.controller.js](webapp/controller/App.controller.js)

``` js
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"]
,(Controller,
  MessageToast, 
  JSONModel, 
  ResourceModel) => {
   "use strict";

   return Controller.extend("ui5.walkthrough.controller.App", {

// actividades de inicio del controlador
     onInit() {

 //Se define modelo de datos local
   const oData = {
            recipient : {
               name : "World" }
         };

//Se asigna modelo a la vista
  const oModel = new JSONModel(oData);
  this.getView().setModel(oModel);

// Se instancia modelo i18n
   const i18nModel = new ResourceModel({
 bundleName: "ui5.walkthrough.i18n.i18n"});
 
// Se asigna modelo i18n a la vista
this.getView().setModel(i18nModel, "i18n");},

// Método saludar
   onShowHello() {
 
//Se recupera modelo i18n de la vista
const oBundle = this.getView().getModel("i18n").getResourceBundle();

// se obtiene destinatario de i18n  
const sRecipient = this.getView().getModel().getProperty("/recipient/name");

//Se compone mensaje
const sMsg = oBundle.getText("helloMsg", [sRecipient]);

// Se muestra el mensaje
   MessageToast.show(sMsg);
      }
   });
});
```


3. Se modifica la vista [webapp/view/App.view.xml](webapp/view/App.view.xml)

``` XML
<mvc:View
   controllerName="ui5.walkthrough.controller.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">

   <Button
      text="{i18n>showHelloButtonText}"
      press=".onShowHello"/>

   <Input
      value="{/recipient/name}"
      description="Hello {/recipient/name}"
      valueLiveUpdate="true"
      width="60%"/>

</mvc:View>
```

En la vista XML, utilizamos el enlace de datos para conectar el texto del botón a la propiedad 
showHelloButtonText en el modelo i18n. Un paquete de recursos es una estructura plana,
por lo que se puede omitir la barra diagonal (/) anterior en la ruta.


Los archivos i18n sólo afectan a los textos de las aplicaciones del lado del cliente. 
Los textos que se cargan desde los sistemas back-end pueden aparecer 
en todos los idiomas admitidos por el sistema back-end.

## Convenciones

- El modelo de recursos para la internacionalización se llama modelo i18n.


- Las claves del paquete de recursos están escritas en camelCase (inferior).


- Los valores del paquete de recursos pueden contener parámetros como {0}, {1}, {2},…


- Nunca concatene cadenas que estén traducidas, utilice siempre marcadores de posición.


- Utilice secuencias de escape Unicode para caracteres especiales.