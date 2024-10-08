*****************************
# Step 21: Expression Binding
*****************************

A veces, los tipos predefinidos de SAPUI5 no son lo suficientemente flexibles y desea realizar un cálculo o formato simple en la vista;

ahí es donde las expresiones son realmente útiles.


Los usamos para formatear nuestro precio de acuerdo con el número actual en el modelo de datos.


El precio ahora está formateado según su número.

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

           numberUnit="{view>/currency}"
           numberState="{= ${invoice>ExtendedPrice} > 7 ? 'Error' : 'Success' }"/>

      </items>
   </List>
</mvc:View>
```

<mark>numberState</mark>


Agregamos la propiedad **numberState** en nuestra vista e introducimos una nueva sintaxis vinculante que comienza con = dentro de los corchetes.


Este símbolo se utiliza para iniciar una nueva sintaxis de enlace, se llama expresión y 
puede realizar una lógica de cálculo simple como el operador ternario que se muestra aquí. 


La condición del operador es un valor de nuestro modelo de datos. 
Un enlace de modelo dentro de un enlace de expresión debe tener como carácter de escape el signo $, como puede ver en el código.


Configuramos el estado "Error" (el número aparecerá en rojo) si el precio es superior a 50 y "Éxito" (el número aparecerá en verde) en caso contrario.


Las expresiones se limitan a un conjunto particular de operaciones que ayudan 
a formatear los datos, como expresiones matemáticas, comparaciones, etc.


### Convenciones


Utilice únicamente el enlace de expresión para cálculos triviales.


2. Se crea el fichero [webapp/controller/InvoiceList.controller.js](webapp/controller/InvoiceList.controller.js)

``` js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {

        onInit() {

            // Se instancia modelo en formato json con el tipo de moneda
            const oViewModel = new JSONModel({
                currency: "EUR"
            });

            // Se asigna modelo a la vista
            this.getView().setModel(oViewModel, "view");
        }
    });
});
```


Para poder acceder al código de moneda que no forma parte de nuestro modelo de datos, 
definimos un modelo de vista en el controlador de la lista de facturas.


Es un modelo JSON simple con una sola moneda clave y el valor EUR. 
Esto se puede vincular al formateador del campo numérico.


Los modelos de vista pueden contener cualquier opción de configuración asignada a un control
para vincular propiedades como la visibilidad.


### Convenciones


Utilice tipos de datos en lugar de formateadores personalizados siempre que sea posible.