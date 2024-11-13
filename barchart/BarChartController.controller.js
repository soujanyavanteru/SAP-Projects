sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("namespace.controller.BarChartController", {
        onInit: function () {
            // Sample data for expected and weighted sales volumes
            var oData = {
                SalesData: [
                    { type: "Expected Volume", volume: 120 },
                    { type: "Weighted Volume", volume: 85 }
                ]
            };

            // Create JSON model and set it to the view
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});
