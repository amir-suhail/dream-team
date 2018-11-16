sap.ui.define([
               "sap/ui/core/mvc/Controller"
               ], function (Controller, JSONModel) {
  "use restrict";
  return Controller.extend("sap.ui.demo.wt.controller.Master",{
  onInit: function () {
  },
  onPress: function(oEvent)
  {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("second");
  }
  });
});