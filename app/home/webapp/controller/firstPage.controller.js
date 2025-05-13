// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//      "sap/ui/model/json/JSONModel"
//   ], (Controller) => {
//     "use strict";
 
//     return Controller.extend("ns.home.controller.firstPage", {
//       onInit: function () {
//         console.log("✅ firstPage Controller Initialized");

//         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//         oRouter.getRoute("firstPage").attachPatternMatched(this._onRouteMatched, this);
//     },

//     _onRouteMatched: function (oEvent) {
//         console.log("🔹 Route matched - Fetching student data");

//         // Retrieve the EmployeeID from the route parameters
//         var sEmployeeID = oEvent.getParameter("arguments").EmployeeID;
//         console.log("🔹 Employee ID received:", sEmployeeID); // Debugging

//         var oStudentModel = new JSONModel();
//         this.getView().setModel(oStudentModel, "StudentDetail");

//         // Fetch student details via AJAX
//         $.ajax({
//             url: "/odata/v4/detail/Student_Details/" + sEmployeeID, // 🟢 Fetch specific student data
//             type: "GET",
//             dataType: "json",
//             success: function (data) {
//                 oStudentModel.setData(data);

//                 console.log("✅ Student details fetched successfully:", data); // Debugging
//             }.bind(this),
//             error: function (xhr, status, error) {
//                 console.error("❌ Error fetching student details:", error);
//             }
//         });
//     }
// });
// });

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent" // ✅ Ensure UIComponent is imported
], function (Controller, JSONModel, UIComponent) { 
    "use strict";

    return Controller.extend("ns.task.controller.firstPage", {
        onInit: function () {
            console.log("✅ firstPage Controller Initialized");

            var oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("firstPage").attachPatternMatched(this._onRouteMatched, this);
        },
        onNavigateToDashboard: function () {
            console.log("🔹 Navigating to Dashboard Page");

            var oRouter = this.getOwnerComponent().getRouter(); // ✅ Corrected router retrieval
            if (oRouter) {
                oRouter.navTo("dashboardPage"); // Navigate to dashboard
            } else {
                console.error("❌ Navigation failed: Router instance missing.");
            }
        },

        _onRouteMatched: function (oEvent) {
            console.log("🔹 Route matched - Fetching student data");

            // Retrieve the EmployeeID from the route parameters
            var sEmployeeID = oEvent.getParameter("arguments").EmployeeID;
            console.log("🔹 Employee ID received:", sEmployeeID); // Debugging

            var oStudentModel = new JSONModel();
            this.getView().setModel(oStudentModel, "StudentDetail");

            // Fetch student details via AJAX
            $.ajax({
                url: "/odata/v4/detail/Student_Details/" + sEmployeeID, // 🟢 Fetch specific student data
                type: "GET",
                dataType: "json",
                success: function (data) {
                    oStudentModel.setData(data);
                    console.log("✅ Student details fetched successfully:", data); // Debugging
                }.bind(this),
                error: function (xhr, status, error) {
                    console.error("❌ Error fetching student details:", error);
                }
            });
        },

       
    });
});
