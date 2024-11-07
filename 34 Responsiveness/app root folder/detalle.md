*****************************
# Step 34: Responsiveness
*****************************

En este paso, mejoramos la capacidad de respuesta de nuestra aplicación. Las aplicaciones SAPUI5 se pueden ejecutar en teléfonos, tabletas y dispositivos de escritorio y podemos configurar la aplicación para aprovechar al máximo el espacio de la pantalla en cada situación. Afortunadamente, los controles SAPUI5 como **sap.m.Table** ya ofrecen muchas funciones que podemos usar.

*****************************

## Previsualización
![detalle](webapp/img/tablita.png)


#### Una tabla responsiva oculta algunas de las columnas en dispositivos pequeños.

## Código

1. Se modifica [webapp/view/InvoiceList.view.xml](webapp/view/InvoiceList.view.xml)


``` xml
<mvc:View
	controllerName="ui5.walkthrough.controller.InvoiceList"
	xmlns="sap.m"
	xmlns:core="sap.ui.core"
	xmlns:mvc="sap.ui.core.mvc">
	<Table
		id="invoiceList"
		class="sapUiResponsiveMargin"
		width="auto"
		items="{
				path : 'invoice>/Invoices',
				sorter : {
					path : 'ShipperName',
					group : true
				}
			}">
		<headerToolbar>
			<Toolbar>
				<Title text="{i18n>invoiceListTitle}" />
				<ToolbarSpacer />
				<SearchField
					width="50%"
					search=".onFilterInvoices"/>
			</Toolbar>
		</headerToolbar>
		<columns>
			<Column
				hAlign="End"
				minScreenWidth="Small"
				demandPopin="true"
				width="5em">
				<Text text="{i18n>columnQuantity}" />
			</Column>
			<Column>
				<Text text="{i18n>columnName}" />
			</Column>
			<Column
				minScreenWidth="Small"
				demandPopin="true">
				<Text text="{i18n>columnStatus}" />
			</Column>
			<Column
				minScreenWidth="Tablet"
				demandPopin="false">
				<Text text="{i18n>columnSupplier}" />
			</Column>
			<Column hAlign="End">
				<Text text="{i18n>columnPrice}" />
			</Column>
		</columns>
		<items>
			<ColumnListItem
				type="Navigation"
				press=".onPress">
				<cells>
					<ObjectNumber
						number="{invoice>Quantity}"
						emphasized="false"/>
					<ObjectIdentifier title="{invoice>ProductName}" />
					<Text
						core:require="{
								Formatter: 'ui5/walkthrough/model/formatter'
						}"
						text="{
								parts: [
									'invoice>Status',
									'i18n>invoiceStatusA',
									'i18n>invoiceStatusB',
									'i18n>invoiceStatusC'
								],
								formatter: 'Formatter.statusText.bind($controller)'
						}"/>
					<Text text="{invoice>ShipperName}" />
					<ObjectNumber
						number="{
								parts: [
									'invoice>ExtendedPrice',
									'view>/currency'
								],
								type: 'sap.ui.model.type.Currency',
								formatOptions: {
									showMeasure: false
								}
							}"
						unit="{view>/currency}"
						state="{= ${invoice>ExtendedPrice} > 50 ? 'Error' : 'Success' }"/>
				</cells>
			</ColumnListItem>
		</items>
	</Table>
</mvc:View>
```

Cambiamos la lista por una tabla simplemente reemplazando la etiqueta **List** con **Table**.


La tabla tiene una función de respuesta integrada que nos permite hacer que la aplicación sea más flexible. La tabla y la lista comparten el mismo conjunto de propiedades, por lo que podemos simplemente reutilizarlas y también el clasificador.

Dado que una tabla tiene varias celdas en cada fila, tenemos que definir columnas para nuestra tabla y nombrarlas según los datos. Agregamos cinco controles sap.m.Column a la agregación de columnas y configuramos cada uno de ellos de forma ligeramente diferente:


*	Quantity


	Esta columna contendrá un número corto, por lo que establecemos la alineación en Fin (que significa "derecha" en los idiomas LTR) y el ancho en 4em, que es lo suficientemente largo para la descripción de la columna. Como texto de descripción, usamos un control sap.m.Text que hace referencia a una propiedad del paquete de recursos. Establecemos la propiedad minScreenWidth en Small para indicar que esta columna no es tan importante en los teléfonos. Le indicaremos a la tabla que muestre esta columna debajo de la columna principal estableciendo la propiedad demandPopin en true.

*	Name


	Nuestra columna principal tiene un ancho bastante grande para mostrar todos los detalles. Siempre se mostrará.


*	Status

	El estado no es tan importante, por lo que también lo mostramos debajo del campo de nombre en pantallas pequeñas configurando minScreenWidth en pequeño y demandPopin en verdadero.

*	Supplier


	Ocultamos completamente la columna Proveedor en los dispositivos telefónicos configurando minScreenWidth en Tablet y demandPopin en falso.


*	Price


	Esta columna siempre está visible ya que contiene nuestro precio de factura.


En lugar del ObjectListItem que teníamos antes, ahora dividiremos la información en las celdas que coincidan con las columnas definidas anteriormente. Por lo tanto, lo cambiamos a un control ColumnListItem con los mismos atributos, pero ahora con agregación de celdas. Aquí creamos cinco controles para mostrar nuestros datos:


*	Quantity


	Un control sap.m.ObjectNumber simple que está vinculado a nuestro campo de datos.

*	Name

	Un control sap.m.ObjectIdentifier que especifica el nombre.


*	Status

	Un control sap.m.Text con el mismo formateador que antes.


*	Supplier

	Un control sap.m.Text simple.


*	Price

	Un control ObjectNumber con el mismo formateador que los atributos number y numberUnit de los pasos anteriores.


Ahora hemos definido nuestra tabla de forma responsiva y podemos ver los resultados cuando disminuimos el tamaño de la pantalla del navegador. La columna Proveedor no se muestra en los tamaños de teléfono y las dos columnas Cantidad y Estado se mostrarán debajo del nombre.


2. Se modifica [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)

``` js

...
# Invoice List
invoiceListTitle=Invoices
invoiceStatusA=New
invoiceStatusB=In Progress
invoiceStatusC=Done
columnQuantity=Quantity
columnName=Name
columnSupplier=Supplier
columnStatus=Status
columnPrice=Price

# Detail Page
...
```


Añadimos los nombres de las columnas y los títulos de los atributos a nuestro archivo i18n.

Podemos ver los resultados cuando reducimos el tamaño de la pantalla del navegador o abrimos la aplicación en un dispositivo pequeño.


## Conveciones


+ Optimice su aplicación para los diferentes tamaños de pantalla de teléfonos, tabletas y dispositivos de escritorio.