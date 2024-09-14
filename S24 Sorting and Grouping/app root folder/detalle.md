*****************************
# Step 24: Sorting and Grouping
*****************************

Para que nuestra lista de facturas sea aún más fácil de usar, la ordenamos alfabéticamente en lugar de mostrar solo el orden del modelo de datos. Además, introducimos grupos y agregamos la empresa que envía los productos para que los datos sean más fáciles de consumir.


La lista ahora está ordenada y agrupada por empresa de envío.

1. Se modifica la vista [webapp/view/InvoiceList.view.xml](webapp/view/InvoiceList.view.xml).


Agregamos un clasificador declarativo a nuestra sintaxis de enlace. Como es habitual, transformamos la sintaxis de enlace simple a la notación de objeto, especificamos la ruta a los datos y ahora agregamos una propiedad de clasificación adicional. Especificamos la ruta de datos por la que se deben ordenar los elementos de la factura y UI5 se encargará del resto. De manera predeterminada, la clasificación es ascendente, pero también puede agregar una propiedad descendente con el valor true dentro de la propiedad de clasificación para cambiar el orden de clasificación.

Si ejecutamos la aplicación ahora, podemos ver una lista de facturas ordenadas por el nombre de los productos.

``` xml
<mvc:View
   controllerName="ui5.walkthrough.controller.InvoiceList"
   xmlns="sap.m"
   xmlns:mvc="sap.ui.core.mvc">
   <List
      id="invoiceList"
      class="sapUiResponsiveMargin"
      width="auto"
      items="{
         path : 'invoice>/Invoices',
         sorter : {
            path : 'ProductName' 
         }
      }">
      ...
   </List>
</mvc:View>
```


Modificamos la vista y añadimos un clasificador diferente, o mejor aún, cambiamos el clasificador y configuramos el grupo de atributos como verdadero. También especificamos la ruta al campo de datos ShipperName. Esto agrupa los artículos de la factura por la empresa de envío.


``` xml
<mvc:View
    controllerName="ui5.walkthrough.controller.InvoiceList"
    xmlns="sap.m"
    xmlns:mvc="sap.ui.core.mvc">
    <List
        id="invoiceList"
        headerText="{i18n>invoiceListTitle}"
        class="sapUiResponsiveMargin"
        width="auto"
        items="{
         path : 'invoice>/Invoices',
         sorter : {
            path : 'ProductName' 
         }
        }">
        ...
    </List>
</mvc:View>
```


Al igual que con el clasificador, no se requiere ninguna acción adicional. La lista y las funciones de enlace de datos de SAPUI5 harán el trabajo de mostrar los encabezados de grupo automáticamente y categorizar los artículos en los grupos. Podríamos definir una fábrica de encabezados de grupo personalizada si quisiéramos configurando la propiedad groupHeaderFactory, pero el resultado ya parece correcto.