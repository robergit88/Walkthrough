QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], async(Core) => {
	"use strict";

	await Core.ready();

	sap.ui.require([
		// "http://sdk.openui5.org/resources/formatter"], () => {
		// "unit/model/formatter"], () => {
		// "test/unit/model/formatter"], () => {
		// "/webapp/test/unit/model/formatter"], () => {
		"./webapp/test/unit/model/formatter"], () => {
		// "./model/formatter"], () => {

		QUnit.start();
		
	});
});