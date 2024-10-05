**************************
# Step 11: Pages and Panels
**************************

Después de todo el trabajo en la estructura de la aplicación, es hora de mejorar el aspecto de
nuestra aplicación.


Usaremos dos controles de la biblioteca sap.m para agregar un poco más de "brillo" a la interfaz de usuario.


También aprenderá sobre las agregaciones de control en este paso.


Ahora se muestran los controles de los pasos anteriores sobre un panel.


1. Se modifica la vista [webapp/view/App.view.xml](webapp/view/App.view.xml)

``` js
<mvc:View
   controllerName="ui5.walkthrough.controller.App"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc"
  displayBlock="true">
   <App>
      <pages>
         <Page title="{i18n>homePageTitle}">
            <content>
               <Panel
                  headerText="{i18n>helloPanelTitle}">
                  <content>
                     <Button
                        text="{i18n>showHelloButtonText}"
                        press=".onShowHello"/>
                     <Input
                        value="{/recipient/name}"
                        description="Hello {/recipient/name}"
                        valueLiveUpdate="true"
                        width="60%"/>
                  </content>
               </Panel>
            </content>
         </Page>
      </pages>
   </App>
</mvc:View>
```
Se coloca el campo de entrada y el botón dentro de un control contenedor llamado <ins>sap/m/Page</ins>.


`#000000La página proporciona` una agregación de 0..N otros controles llamado 
**content**. 


También se muestra el título encima del **content**.


La página en sí se coloca en la agregación de páginas de otro control llamado sap/m/App que hace las siguientes cosas importantes para nosotros: 

1. Escribe un montón de propiedades en el encabezado de index.html que son necesarias para una visualización adecuada en dispositivos móviles.


2. Ofrece funcionalidad para navegar entre páginas con animaciones. Usaremos esto pronto.


3. Para que la altura de pantalla completa de la vista funcione correctamente,
agregamos el atributo displayBlock con el valor verdadero a la vista. 


4. El contenido real se incluye dentro de un control del Panel para agrupar el contenido relacionado.

 
2. Se modifica el fichero [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)

Agregamos nuevos pares clave/valor a nuestro paquete de texto para el título de la página de inicio y el título del panel.

``` js
# App Descriptor
appTitle=Hello World
appDescription=A simple walkthrough app that explains the most important concepts of SAPUI5

# Hello Panel
showHelloButtonText=Say Hello
helloMsg=Hello {0}
homePageTitle=Walkthrough a 
helloPanelTitle=Hello World
```
