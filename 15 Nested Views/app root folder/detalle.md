************************************
# Step 15: Nested Views
************************************

El contenido de nuestro panel se está volviendo cada vez más complejo y ahora es el momento de mover el contenido del panel a una vista separada.


Con este enfoque, la estructura de la aplicación es mucho más fácil de entender,
y las partes individuales de la aplicación se pueden reutilizar.

El contenido del panel ahora se refactoriza en una vista separada 
(sin cambios visuales en el último paso)


1. Se modifica el fichero [App.view.xml](webapp/view/App.view.xml)

``` XML
<mvc:View
	controllerName="ui5.walkthrough.controller.App"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc"
	displayBlock="true">
	<Shell>
		<App class="myAppDemoWT">
			<pages>
				<Page title="{i18n>homePageTitle}">
					<content>
					<!-- Una vista dentro de otra vista. -->
						<mvc:XMLView viewName="ui5.walkthrough.view.HelloPanel"/>
					</content>
				</Page>
			</pages>
		</App>
	</Shell>
</mvc:View>

```


En lugar de colocar el panel y su contenido directamente en nuestra vista de aplicación, 
lo moveremos a una nueva vista llamada **HelloPanel**. 
Nos referimos a esto usando una etiqueta **XMLView** en la agregación de contenido del panel.


2. Se crea el fichero [webapp/view/HelloPanel.view.xml](webapp/view/HelloPanel.view.xml)

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

Todo el contenido del panel ahora se agrega al nuevo archivo HelloPanel.view.xml. 
También especificamos el controlador de la vista configurando el atributo nombre del controlador de la vista XML. 

3. Se crea el fichero [webapp/controller/HelloPanel.controller.js](webapp/controller/HelloPanel.controller.js)

3. Se modifica el fichero [webapp/controller/App.controller.js](webapp/controller/App.controller.js)