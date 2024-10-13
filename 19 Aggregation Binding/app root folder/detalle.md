*****************************
# Step 19: Aggregation Binding
*****************************

Ahora que tenemos una buena estructura para nuestra aplicación, es hora de agregar más funciones.


Comenzamos a explorar más funciones del enlace de datos agregando algunos datos de factura en formato **JSON** que mostramos en una lista debajo del panel.


1. Se crea el fichero [webapp/Invoices.json](webapp/Invoices.json)

``` json
{
    "Invoices": [
        {
            "ProductName": "Pineapple",
            "Quantity": 21,
            "ExtendedPrice": 87.2,
            "ShipperName": "Fun Inc.",
            "ShippedDate": "2015-04-01T00:00:00",
            "Status": "A"
        },
        {
            "ProductName": "Milk",
            "Quantity": 4,
            "ExtendedPrice": 10,
            "ShipperName": "ACME",
            "ShippedDate": "2015-02-18T00:00:00",
            "Status": "B"
        }
}
```


2. Se modifica el fichero [webapp/manifest.json](webapp/manifest.json)

3. Se modifica el fichero [webapp/view/App.view.xml](webapp/view/App.view.xml)

4. Se crea el fichero [webapp/view/InvoiceList.view.xml](webapp/view/InvoiceList.view.xml)

5. Se crea el fichero [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)