********************************
# Step 16: Dialogs and Fragments
********************************

En este paso, veremos más de cerca otro elemento que se puede utilizar para ensamblar vistas: **el fragmento**.

Los fragmentos son partes livianas de la interfaz de usuario (subárboles de la interfaz de usuario) que se pueden reutilizar pero no tienen ningún controlador.


Esto significa que siempre que desee definir una determinada parte de su interfaz de usuario 
para que sea reutilizable en múltiples vistas, o cuando desea intercambiar algunas partes de una vista entre sí bajo ciertas circunstancias (diferentes roles de usuario, modo de edición versus modo de solo lectura), un fragmento es un buen candidato, especialmente cuando no se requiere lógica de controlador adicional.


Un fragmento puede constar de 1 a n controles.
En tiempo de ejecución, los fragmentos colocados en una vista se comportan de manera similar al contenido de la vista "normal", lo que significa que los controles dentro del fragmento simplemente se incluirán en el DOM de la vista cuando se representen.


Por supuesto, hay controles que no están diseñados para formar parte de una vista, por ejemplo, diálogos. Pero incluso para estos controles, los fragmentos pueden resultar particularmente útiles, como verá en un minuto.


Ahora agregaremos un cuadro de diálogo a nuestra aplicación. Los cuadros de diálogo son especiales porque se abren encima del contenido normal de la aplicación y, por lo tanto, 
no pertenecen a una vista específica. Eso significa que se debe crear una instancia del diálogo en algún lugar del código del controlador, pero como queremos seguir con el enfoque declarativo y crear artefactos reutilizables para que sean lo más flexibles posible, Crearemos un fragmento XML que 
contiene el diálogo. Después de todo, un cuadro de diálogo se puede utilizar en más de una vista de su aplicación.


1. Se modifica el fichero [webapp/view/HelloPanel.view.xml](webapp/view/HelloPanel.view.xml)

2. Se crea el fichero [webapp/view/HelloDialog.fragment.xml](webapp/view/HelloDialog.fragment.xml)

3. Se modifica el fichero [webapp/controller/HelloPanel.controller.js](webapp/controller/HelloPanel.controller.js)

4. Se modifica el fichero [webapp/i18n/i18n.properties](webapp/i18n/i18n.properties)