*********************
# Step 1: Hello World!
********************

Como sabes, SAPUI5 tiene que ver con HTML5. 
Comencemos por crear un primer "Hola mundo" solo con HTML.

1. Cree una carpeta en su máquina local que contendrá todas las fuentes de la aplicación que vamos a crear.
Nos referiremos a esta carpeta como la "app root folder".

2. Cree un nuevo archivo llamado package.json que le permitirá ejecutar comandos y consumir paquetes 
desde el registro npm a través de la interfaz de línea de comandos npm. Ingrese el siguiente contenido:

3. Cree una nueva carpeta llamada webapp en la carpeta raíz de la aplicación. 
Contendrá todas las fuentes que estarán disponibles en el navegador más adelante. 
Nos referiremos a esta carpeta como la "webapp folder".

4. Cree un nuevo archivo HTML llamado index.html en la carpeta de su aplicación web.

5. Cree un nuevo archivo llamado manifest.json en la carpeta "webapp folder"; 
También se le conoce como "descriptor de aplicación".
Todas las opciones de configuración específicas de la aplicación que presentaremos en este tutorial 
se agregarán a este archivo.

6. Abra una terminal en la carpeta raíz de la aplicación y ejecute npm i -D @ui5/cli para instalar UI5 Tooling.

7. Ejecute ui5 init.

8. Ejecute npm start.
