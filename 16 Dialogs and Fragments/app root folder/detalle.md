********************************
# Step 16: Dialogs and Fragments
********************************

En este paso, veremos más de cerca otro elemento que se puede utilizar para ensamblar vistas: **el fragmento**.

Los fragmentos son partes livianas de la interfaz de usuario (subárboles de la interfaz de usuario) que se pueden reutilizar pero no tienen ningún controlador.


Esto significa que siempre que desee definir una determinada parte de su interfaz de usuario 
para que sea reutilizable en múltiples vistas, o cuando desea intercambiar algunas partes de una vista entre sí bajo ciertas circunstancias (diferentes roles de usuario, modo de edición versus modo de solo lectura), un fragmento es un buen candidato, especialmente cuando no se requiere lógica de controlador adicional.


Un fragmento puede constar de 1 a n controles.
En tiempo de ejecución, los fragmentos colocados en una vista se comportan de manera similar al contenido de la vista "normal", lo que significa que los controles dentro del fragmento simplemente se incluirán en el DOM de la vista cuando se representen.


Por supuesto, hay controles que no están diseñados para formar parte de una vista, por ejemplo, diálogos. Pero incluso para estos controles, los fragmentos pueden resultar particularmente útiles, como verá en un minuto.


Ahora agregaremos un cuadro de diálogo a nuestra aplicación. Los cuadros de diálogo son especiales porque se abren encima del contenido normal de la aplicación y, por lo tanto, 
no pertenecen a una vista específica. Eso significa que se debe crear una instancia del diálogo en algún lugar del código del controlador, pero como queremos seguir con el enfoque declarativo y crear artefactos reutilizables para que sean lo más flexibles posible, Crearemos un fragmento XML que 
contiene el diálogo. Después de todo, un cuadro de diálogo se puede utilizar en más de una vista de su aplicación.


1. Se modifica el fichero [webapp/view/HelloPanel.view.xml](webapp/view/HelloPanel.view.xml)


``` XML
<mvc:View
   controllerName="ui5.walkthrough.controller.HelloPanel"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <Panel
      headerText="{i18n>helloPanelTitle}"
      class="sapUiResponsiveMargin"
      width="auto">
      <content>

         <Button
         id="helloDialogButton"
         text="{i18n>openDialogButtonText}"
         press=".onOpenDialog"
         class="sapUiSmallMarginEnd"/>

         <Button
            text="{i18n>showHelloButtonText}"
            press=".onShowHello"
            class="myCustomButton"/>

         <Input
            value="{/recipient/name}"
            valueLiveUpdate="true"
            width="60%"/>

         <FormattedText
            htmlText="Hello {/recipient/name}"
            class="sapUiSmallMargin sapThemeHighlight-asColor myCustomText"/>

      </content>
   </Panel>
</mvc:View>
```


Agregamos un nuevo botón, con <mark>"helloDialogButton"</mark>, sobre la vista para abrir el diálogo.


Esto llama a una función definida en el controlador de la vista del panel.


Es una buena práctica establecer una identificación única, como **helloWorldButton** en los controles clave de su aplicación para que pueda identificarse fácilmente.


Si no se especifica el atributo id, el tiempo de ejecución de OpenUI5 genera un ID único pero cambiante como "__button23" para el control.


2. Se crea la vista fragmento [webapp/view/HelloDialog.fragment.xml](webapp/view/HelloDialog.fragment.xml)


``` XML
<core:FragmentDefinition
   xmlns="sap.m"
   xmlns:core="sap.ui.core">
   <Dialog
      id="helloDialog"
      title="Hello {/recipient/name}"/>
</core:FragmentDefinition>
```

Agregamos un espacio de nombres xml dentro de la etiqueta **FragmentDefinition**.


La sintaxis es similar a una vista, pero como los fragmentos no tienen un controlador falta este atributo.


Además, el fragmento no tiene ninguna huella en el árbol DOM de la aplicación y no existe una instancia de control del fragmento en sí (sólo los controles contenidos). 


Es simplemente un contenedor para un conjunto de controles de reutilización.



3. Se modifica el fichero [webapp/controller/HelloPanel.controller.js](webapp/controller/HelloPanel.controller.js)


``` js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel", {

onShowHello() {

// read msg from i18n model
const oBundle = this.getView().getModel("i18n").getResourceBundle();

const sRecipient = this.getView().getModel().getProperty("/recipient/name");

const sMsg = oBundle.getText("helloMsg", [sRecipient]);

// show message
   MessageToast.show(sMsg); },

async onOpenDialog() {

// create dialog lazily
this.oDialog ??= await this.loadFragment({
             name: "ui5.walkthrough.view.HelloDialog" });

 this.oDialog.open(); }

    });
 });
```

Usando **async/await**, manejamos la apertura del diálogo de forma asincrónica cada vez que se activa el evento.


Si el fragmento de diálogo aún no existe, se crea una instancia del fragmento llamando a la **API loadFragment**. Luego almacenamos el cuadro de diálogo en la instancia del controlador. 
Esto nos permite reutilizar el diálogo cada vez que se activa el evento.



TIP
Para reutilizar la funcionalidad de apertura y cierre de diálogos en otros controladores, 
puede crear un nuevo archivo ui5.walkthrough.controller.BaseController, 
que extiende sap.ui.core.mvc.Controller, y colocar toda la codificación relacionada 
con los diálogos en este controlador. Ahora, todos los demás controladores pueden extenderse 
desde ui5.walkthrough.controller.BaseController en lugar de sap.ui.core.mvc.Controller.


4. Se modifica el fichero [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)

``` js
# App Descriptor
appTitle=Hello World
appDescription=A simple walkthrough app that explains the most important concepts of SAPUI5

# Hello Panel
showHelloButtonText=Say Hello
helloMsg=Hello {0}
homePageTitle=Walkthrough
helloPanelTitle=Hello World
openDialogButtonText=Say Hello With Dialog

# Agregamos un nuevo texto para el botón openDialogButtonText
```