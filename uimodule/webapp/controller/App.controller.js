sap.ui.define(
  ["com/ui5/ui5list/controller/BaseController",
  "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.ui5.ui5list.controller.App", {
      onInit: function () {

        var oModel = new JSONModel(sap.ui.require.toUrl("com/ui5/ui5list/model/List.json"));
        this.getView().setModel(oModel);
    }
  });
  });
