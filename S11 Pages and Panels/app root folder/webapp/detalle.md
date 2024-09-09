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

2. Se modifica el fichero [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)