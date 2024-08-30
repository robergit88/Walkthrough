sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], (XMLView) => {
    "use strict";

    XMLView.create({
        viewName: "ui5.walkthrough.view.App"
    }).then((oView) => oView.placeAt("content"));
});

// Reemplazamos la creación de instancias del control sap/m/Text por nuestro nuevo archivo App.view.xml.
// La vista es creada por una función de fábrica de SAPUI5.
// El nombre tiene el prefijo del espacio de nombres ui5.walkthrough.view
// para identificar de forma única este recurso.

// Convenciones:
//-------------
// Los nombres de las vistas están en mayúscula.
// Todas las vistas se almacenan en la carpeta de vistas.
// Los nombres de las vistas XML siempre terminan en *.view.xml.
// El espacio de nombres XML predeterminado es sap.m
// Otros espacios de nombres XML utilizan la última parte del espacio de nombres SAP como alias
// (por ejemplo, mvc para sap.ui.core.mvc)