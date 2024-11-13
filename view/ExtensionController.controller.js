sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("namespace.controller.ExtensionController", {
        onInit: function () {
            // Initialize JSON model for custom data binding
            var oModel = new JSONModel();
            this.getView().setModel(oModel);

            // Fetch utility data from OData service
            this._fetchUtilityData();
        },

        _fetchUtilityData: function () {
            var oModel = this.getView().getModel();
            var sUrl = "/sap/opu/odata/sap/YOUR_ODATA_SERVICE/UtilityData";

            oModel.loadData(sUrl, null, true, "GET", false, false, {
                "Content-Type": "application/json"
            });

            // Handle successful data load
            oModel.attachRequestCompleted(function (oEvent) {
                var aData = oEvent.getSource().getData();
                oModel.setData({
                    UtilityData: aData.results
                });
            });
        }
    });
});
