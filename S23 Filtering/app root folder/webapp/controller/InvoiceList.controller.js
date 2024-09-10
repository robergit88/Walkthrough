sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, formatter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {

        formatter: formatter,

        onInit() {

            // Se instancia modelo local con el tipo de moneda en formato json
            const oViewModel = new JSONModel({ currency: "EUR" });

            // Se asigna modelo a la vista
            this.getView().setModel(oViewModel, "view");
        },

        // Begin insert
		onFilterInvoices(oEvent) {
            // build filter array
			const aFilter = [];
			const sQuery = oEvent.getParameter("query");
			if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
            
			// filter binding
			const oList = this.byId("invoiceList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
        // End insert
    });
});

// Cargamos dos nuevas dependencias para el filtrado. El objeto de filtro contendrá nuestra configuración 
// para la acción de filtrado y FilterOperator es un tipo auxiliar que necesitamos para
// especificar el filtro.

// En la función onFilterInvoices construimos un objeto de filtro a partir de la cadena de búsqueda
// que el usuario ha escrito en el campo de búsqueda. 
// Los controladores de eventos siempre reciben un argumento de evento que se puede utilizar 
// para acceder a los parámetros que proporciona el evento. En nuestro caso, 
// el campo de búsqueda define una consulta de parámetros a la que accedemos 
// llamando a getParameter("query") en el parámetro oEvent.

// Si la consulta no está vacía, agregamos un nuevo objeto de filtro a la matriz de filtros aún vacía.
// Sin embargo, si la consulta está vacía, filtramos el enlace con una matriz vacía. 
// Esto garantiza que volvamos a ver todos los elementos de la lista. 
// También podríamos agregar más filtros a la matriz, si quisiéramos buscar más de un campo de datos. 
// En nuestro ejemplo, simplemente buscamos en la ruta ProductName y 
// especificamos un operador de filtro que buscará la cadena de consulta dada.

// Se accede a la lista con el ID que hemos especificado en la vista, 
// ya que el control tiene automáticamente como prefijo el ID de la vista,
// por lo que debemos solicitar a la vista el control con la función auxiliar byId.
// En el control de lista, accedemos a la vinculación de los elementos de agregación para filtrarlo 
// con nuestro objeto de filtro recién construido. 
// Esto filtrará automáticamente la lista por nuestra cadena de búsqueda de modo que solo se muestren
//  los elementos coincidentes cuando se active la búsqueda. 
//  El operador de filtro FilterOperator.Contains 
//  no distingue entre mayúsculas y minúsculas.