************************************
# Step 15: Nested Views
************************************

El contenido de nuestro panel se está volviendo cada vez más complejo y ahora es el momento de mover el contenido del panel a una vista separada.


Con este enfoque, la estructura de la aplicación es mucho más fácil de entender,
y las partes individuales de la aplicación se pueden reutilizar.

El contenido del panel ahora se refactoriza en una vista separada 
(sin cambios visuales en el último paso)


1. Se modifica el fichero [App.view.xml](webapp/view/App.view.xml)

2. Se crea el fichero [webapp/view/HelloPanel.view.xml](webapp/view/HelloPanel.view.xml)

3. Se crea el fichero [webapp/controller/HelloPanel.controller.js](webapp/controller/HelloPanel.controller.js)

3. Se modifica el fichero [webapp/controller/App.controller.js](webapp/controller/App.controller.js)