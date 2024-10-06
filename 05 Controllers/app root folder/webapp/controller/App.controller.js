sap.ui.define([
    "sap/ui/core/mvc/Controller"], 
 (Controller) => {

    "use strict";
 
 return Controller.extend("ui5.walkthrough.controller.App", 

{
  onShowHello() {

  // show a native JavaScript alert
  alert("Hello World from controller class");
       }

    });
 });