sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
], function (Controller, ODataModel) {
    "use strict";

    return Controller.extend("myApp.controller.Main", {
        onInit: function () {
            // Create an OData model
            var oModel = new ODataModel("/sap/opu/odata/sap/YOUR_ODATA_SERVICE/");
            this.getView().setModel(oModel);

            // Bind data to VizFrame
            var oVizFrame = this.getView().byId("idMeterReadingChart");
            oVizFrame.setModel(oModel);
        }
    });
});
