sap.ui.define(["sap/m/Text"], 
    (Text) => {
    "use strict";

new Text({ text: "Hello World from text control"}).placeAt("content"); 
});

//En lugar de usar JavaScript nativo para mostrar un cuadro de diálogo, 
//queremos usar un control SAPUI5 simple.
//Los controles se utilizan para definir la apariencia y el comportamiento de partes de la pantalla.
    
// En el ejemplo anterior, la devolución de llamada del evento init es donde ahora creamos 
//una instancia de un control de texto SAPUI5. 
//El nombre del control tiene como prefijo el espacio de nombres de su biblioteca de control sap/m/ 
//y las opciones se pasan al constructor con un objeto JavaScript. Para nuestro control establecemos 
//la propiedad de texto en el valor "Hola mundo".

//Encadenamos la llamada al constructor del control al método estándar placeAt que se utiliza 
//para colocar controles SAPUI5 dentro de un nodo del modelo de objetos de documento (DOM) 
//o cualquier otra instancia de control SAPUI5. Pasamos el ID de un nodo DOM como argumento. 
//Como nodo de destino utilizamos la etiqueta del cuerpo del documento HTML y le damos el contenido de ID.