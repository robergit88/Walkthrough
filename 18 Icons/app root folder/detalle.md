***
# Step 18: Icons
***
Agregaremos un ícono para saludar a nuestros usuarios cuando se abra el cuadro de diálogo.


SAPUI5 trabaja con una fuente de íconos que contiene más de 500 entradas.

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
         icon="sap-icon://world"
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

Se configura un icono (pequeño) para el botón helloDialogButton


El protocolo sap-icon:// indica que se debe cargar un ícono de la fuente del ícono. 
El mundo del identificador es el nombre legible del ícono en la fuente del ícono.



Para llamar a cualquier ícono, use su nombre tal como aparece en el Explorador de íconos en 
sap-icon://<iconname>.



2. Se modifica el fichero [webapp/view/HelloDialog.fragment.xml](webapp/view/HelloDialog.fragment.xml)