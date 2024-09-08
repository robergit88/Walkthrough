*******************
# Step 8: Translatable Texts
*******************

En este paso movemos los textos de nuestra interfaz de usuario a un archivo de recursos separado.


De esta manera, todos están en un lugar central y pueden traducirse fácilmente a otros idiomas. 
Este proceso de internacionalización (en resumen, i18n) se logra en SAPUI5 mediante el uso de un modelo de recursos especial y la sintaxis de enlace de datos estándar, pero sin un carácter "/" precedente.


Creamos la carpeta webapp/i18n y dentro el archivo i18n.properties.

El nombre del paquete resuelto es ui5.walkthrough.i18n, como veremos más adelante
El archivo de propiedades de textos contiene pares de nombre-valor para cada elemento. 
Puede agregar cualquier cantidad de parámetros a los textos agregándoles números entre llaves
Estos números corresponden a la secuencia en la que se accede a los parámetros (comenzando por 0).

En este tutorial solo tendremos un archivo de propiedades.
Sin embargo, en proyectos del mundo real, tendría un archivo separado para cada idioma admitido 
con un sufijo para la configuración regional.
por ejemplo, i18n_de.properties para alemán, i18n_en.properties para inglés, etc. 
Cuando un usuario ejecuta la aplicación, SAPUI5 cargará el archivo de idioma que mejor se adapte al entorno del usuario.

1. Se modifica el fichero [webapp/controller/ App.controller.js](webapp/controller/App.controller.js)


2. Se modifica el fichero [webapp/view/App.view.xml](webapp/view/App.view.xml)