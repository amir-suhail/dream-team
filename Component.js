sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"], function(UIComponent, JSONModel){
	"use strict";
	console.log("component");
	return UIComponent.extend('sap.ui.demo.first.Component', {
		metadata: {
			manifest: "json"
		},
		
		init: function () {
			// create the views based on the url/hash
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}
	});
});
