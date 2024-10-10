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

1. Se crea el fichero [webapp/view/InvoiceList.view.xml](webapp/view/InvoiceList.view.xml)

2. Se crea el fichero [webapp/controller/InvoiceList.controller.js](webapp/controller/InvoiceList.controller.js)