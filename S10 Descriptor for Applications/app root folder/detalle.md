********************************
# Step 10: Descriptor for Applications
********************************

Todos los ajustes de configuración específicos de la aplicación ahora se colocarán en un archivo descriptor separado llamado **manifest.json**
Esto separa el código de la aplicación de los ajustes de configuración y hace que nuestra aplicación sea aún más flexible.
Por ejemplo, todas las aplicaciones de SAP Fiori se implementan como componentes y vienen con un archivo descriptor para poder alojarlas en la plataforma de lanzamiento de SAP Fiori.

La plataforma de lanzamiento de SAP Fiori actúa como un contenedor de aplicaciones y crea una 
instancia de la aplicación sin tener un archivo HTML local para el arranque. 
En su lugar, se analizará el archivo descriptor y el componente se cargará en la página HTML actual.
Esto permite mostrar varias aplicaciones en el mismo contexto. Cada aplicación puede definir 
configuraciones locales, como propiedades de idioma, dispositivos compatibles y más.
Y también podemos usar el archivo descriptor para cargar recursos adicionales y crear instancias 
de modelos como nuestro paquete de recursos i18n.

1. Se crea fichero [manifest.json](webapp/manifest.json)
2. Se modifica [index.html](webapp/index.html)
3. Se elimina fichero index.js, porque el descriptor ahora se encarga de todo.
4. Se modifica fichero [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)
5. Se modifica fichero [Component.js](webapp/Component.js)

El contenido del archivo manifest.json es un objeto de configuración en formato JSON que contiene todas las configuraciones y parámetros globales de la aplicación.
El archivo de manifiesto se denomina descriptor de aplicaciones, componentes y bibliotecas y 
también se denomina "descriptor" o "descriptor de aplicación" cuando se utiliza para aplicaciones.
Se almacena en la carpeta de la aplicación web y SAPUI5 lo lee para crear una instancia del componente. 
Hay tres secciones importantes definidas por espacios de nombres en el archivo manifest.json:


1. **sap.app**
   Contiene los siguientes atributos específicos de la aplicación:
    1. id (obligatorio): el espacio de nombres de nuestro componente de aplicación.
    El ID no debe exceder los 70 caracteres. Debe ser único y debe corresponder al ID/espacio 
    de nombres del componente.
    2. tipo: Define lo que queremos configurar; aquí: una aplicación.
    3. i18n: define la ruta al archivo del paquete de recursos.
    4. título: título de la aplicación.
    5. descripción: texto de descripción breve de lo que hace la aplicación.
    6. applicationVersion: La versión de la aplicación para poder actualizarla fácilmente más adelante.


2. **sap.ui**
   Contiene los siguientes atributos específicos de la interfaz de usuario:
   1. tecnología: valor especifica la tecnología de la interfaz de usuario; 
   en nuestro caso usamos SAPUI5.
   2. DeviceTypes: indica qué dispositivos son compatibles con la aplicación: 
   computadora de escritorio, tableta, teléfono (todos son verdaderos de forma predeterminada).


3. **sap.ui5** contiene parámetros de configuración específicos que SAPUI5 procesa automáticamente:
  1. rootView: si especifica este parámetro, el componente creará automáticamente una instancia de la vista y la utilizará como raíz para este componente.
2. dependencias: Se declaran las bibliotecas de UI utilizadas en la aplicación.
  3. Modelos: Se defininen modelos que serán instanciandos automáticamente cuando se inicie la aplicación.


Definimos el nombre del modelo "i18n" como clave y especificamos el archivo del paquete por espacio de nombres. 
Como en los pasos anteriores, el archivo con nuestros textos traducidos se almacena en la carpeta i18n y se denomina i18n.properties. Simplemente anteponemos la ruta al archivo con el espacio de nombres de nuestra aplicación. La creación de instancias manual en el método init del componente de la aplicación se eliminará más adelante en este paso. Las propiedades supportLocales y fallbackLocale están configuradas en cadenas vacías, ya que en este tutorial nuestra aplicación de demostración usa solo un archivo i18n.properties para simplificar, y nos gustaría evitar que el navegador intente cargar archivos i18n_*.properties adicionales según su configuración del navegador y su ubicación. 

