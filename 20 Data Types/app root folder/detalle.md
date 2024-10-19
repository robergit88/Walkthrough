*****************************
# Step 20: Data Types
*****************************

La lista de facturas ya pinta bien, pero ¿qué es una factura sin precio asignado? 
Normalmente los precios se almacenan en un formato técnico y con un '.' delimitador 
en el modelo de datos.


Por ejemplo, nuestra factura de piñas tiene el precio calculado 87,2 sin moneda. 
Usaremos los tipos de datos SAPUI5 para formatear el precio correctamente,
con un separador decimal que depende de la configuración regional y dos dígitos después del separador.


Se mostrará la lista de facturas con precios y unidades numéricas.

1. Se modifica el fichero [webapp/view/InvoiceList.view.xml](webapp/view/InvoiceList.view.xml)



``` XML
<mvc:View
controllerName="ui5.walkthrough.controller.InvoiceList"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <List
      headerText="{i18n>invoiceListTitle}"
      class="sapUiResponsiveMargin"
      width="auto"
      items="{invoice>/Invoices}" >
      <items>
         <ObjectListItem

            title="{invoice>Quantity} x {invoice>ProductName}"

            number="{
                    parts: [ 'invoice>ExtendedPrice',
                             'view>/currency'],
                    type: 'sap.ui.model.type.Currency',
                    formatOptions: { showMeasure: false } }"

           numberUnit="{view>/currency}"/>

      </items>
   </List>
</mvc:View>
```


2. Se crea el fichero [webapp/controller/InvoiceList.controller.js](webapp/controller/InvoiceList.controller.js)