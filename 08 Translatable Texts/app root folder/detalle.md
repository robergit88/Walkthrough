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

En la función **onInit** creamos una instancia del **ResourceModel** que apunta al nuevo archivo de paquete de mensajes donde ahora se encuentran nuestros textos (archivo i18n.properties).


El nombre del paquete ui5.walkthrough.i18n.i18n consta del espacio de nombres de la aplicación 
ui5.walkthrough (la raíz de la aplicación tal como se define en index.html), 
el nombre de la carpeta i18n y finalmente el nombre del archivo i18n sin extensión.
El tiempo de ejecución de SAPUI5 calcula la ruta correcta al recurso; en este caso la ruta a nuestro archivo i18n.properties. A continuación, la instancia del modelo se configura en la vista como un modelo 
con nombre con la clave i18n. Utilice modelos con nombre cuando necesite tener varios modelos disponibles en paralelo.

En la función **onShowHello** accedemos al modelo i18n para obtener el texto del archivo del paquete de mensajes y reemplazar el marcador de posición {0} con el destinatario de nuestro modelo de datos.


El método **getProperty** se puede llamar en cualquier modelo y toma la ruta de datos como argumento. Además, el paquete de recursos tiene un método **getText** específico que toma una serie de cadenas como segundo argumento.


Se puede acceder al paquete de recursos con el método **getResourceBundle** de un **ResourceModel**. 
En lugar de concatenar textos traducibles manualmente, podemos usar el segundo parámetro de getText para reemplazar partes del texto con datos no estáticos.
Durante el tiempo de ejecución, SAPUI5 intenta cargar el archivo **i18n_*.properties** correcto 
según la configuración de su navegador y su configuración regional.
En nuestro caso sólo hemos creado un archivo i18n.properties para hacerlo más sencillo. 
Sin embargo, puede ver en el tráfico de red de las herramientas de desarrollo de su navegador 
que SAPUI5 intenta cargar uno o más archivos i18n_*.properties antes de recurrir al archivo i18n.properties predeterminado.


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