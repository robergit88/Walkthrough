*****************************
# Step 21: Expression Binding
*****************************

A veces, los tipos predefinidos de SAPUI5 no son lo suficientemente flexibles y desea realizar un cálculo o formato simple en la vista; 
ahí es donde las expresiones son realmente útiles.
Los usamos para formatear nuestro precio de acuerdo con el número actual en el modelo de datos.

El precio ahora está formateado según su número.

1. Se modifica el fichero [webapp/view/InvoiceList.view.xml](webapp/view/InvoiceList.view.xml)

Agregamos la propiedad numberState en nuestra vista declarativa e 
introducimos una nueva sintaxis vinculante que comienza con = dentro de los corchetes.
Este símbolo se utiliza para iniciar una nueva sintaxis de enlace, se llama expresión y 
puede realizar una lógica de cálculo simple como el operador ternario que se muestra aquí. 


La condición del operador es un valor de nuestro modelo de datos. 
Un enlace de modelo dentro de un enlace de expresión debe tener como carácter de escape el signo $, 
como puede ver en el código. Configuramos el estado en "Error" (el número aparecerá en rojo) 
si el precio es superior a 50 y en "Éxito" (el número aparecerá en verde) en caso contrario.


Las expresiones se limitan a un conjunto particular de operaciones que ayudan 
a formatear los datos, como expresiones matemáticas, comparaciones, etc.


Convenciones
Utilice únicamente el enlace de expresión para cálculos triviales.


2. Se crea el fichero [webapp/controller/InvoiceList.controller.js](webapp/controller/InvoiceList.controller.js)