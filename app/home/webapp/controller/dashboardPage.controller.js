sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ns.task.controller.dashboardPage", {
        onInit: function () {
            var oModel = new JSONModel({
                PerformanceData: [
                    { EmployeeName: "Alice", PerformanceRating: 4.5 },
                    { EmployeeName: "Bob", PerformanceRating: 3.8 },
                    { EmployeeName: "Charlie", PerformanceRating: 4.2 }
                ],
                ExperienceData: [
                    { Domain: "SAP Development", Experience: 5 },
                    { Domain: "UI5 Development", Experience: 3 },
                    { Domain: "Cloud Computing", Experience: 7 }
                ],
                AgeData: [
                    { AgeGroup: "20-30", EmployeeCount: 15 },
                    { AgeGroup: "30-40", EmployeeCount: 22 },
                    { AgeGroup: "40-50", EmployeeCount: 10 }
                ]
            });

            this.getView().setModel(oModel);
        }
    });
});
