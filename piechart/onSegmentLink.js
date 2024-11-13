sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("namespace.controller.PieChartController", {
        onInit: function () {
            // Initialize chart data as shown above
        },

        onSegmentClick: function (oEvent) {
            var selectedStatus = oEvent.getSource().getBindingContext().getProperty("status");
            // Navigate to a detailed view based on selectedStatus
            sap.m.URLHelper.redirect("/orderDetails?status=" + selectedStatus, true);
        }
    });
});
