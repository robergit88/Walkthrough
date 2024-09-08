******************
# Step 4: XML Views
******************

Poner toda nuestra interfaz de usuario en el archivo index.js muy pronto resultará en una configuración complicada y tenemos bastante trabajo por delante.


Así que hagamos una primera modularización poniendo el control sap/m/Text en una vista dedicada.


SAPUI5 admite múltiples tipos de vistas (XML, HTML, JavaScript).
Cuando trabajamos con UI5, recomendamos el uso de XML, ya que esto produce el código más legible y nos obligará a separar la declaración de vista de la lógica del controlador. 
Sin embargo, el aspecto de nuestra interfaz de usuario no cambiará.


El texto "Hola mundo" ahora se mostrara mediante un control SAPUI5 (sin cambios visuales en el último paso).

1. Se crea nueva carpeta 📂 y fichero [webapp/view/App.view.xml](webapp/view/App.view.xml)