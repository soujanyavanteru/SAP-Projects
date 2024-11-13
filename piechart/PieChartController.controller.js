sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("namespace.controller.PieChartController", {
        onInit: function () {
            // Sample data for various order statuses
            var oData = {
                OrderStatusData: [
                    { status: "Created Orders", count: 120 },
                    { status: "Missing Orders", count: 20 },
                    { status: "Implausible Orders", count: 15 },
                    { status: "Plausible Orders", count: 90 }
                ]
            };

            // Create JSON model and set it to the view
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});
