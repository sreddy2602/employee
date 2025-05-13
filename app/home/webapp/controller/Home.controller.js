// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/json/JSONModel",
//     "sap/ui/core/UIComponent",
   
// ], function (Controller, JSONModel,UIComponent) {
//     "use strict";
 
//     return Controller.extend("ns.home.controller.Home", {
//         onInit: function () {
//             var oModel = new JSONModel();
//             var that = this;
 
//             $.ajax({
//                 url: "/odata/v4/detail/Student_Details",  // OData endpoint
//                 type: "GET",
//                 dataType: "json",
//                 success: function (data) {
//                     console.log("Data fetched successfully:", data);
//                     oModel.setData({ Employees: data.value });
//                     that.getView().setModel(oModel);
//                 },
//                 error: function (xhr, status, error) {
//                     console.error("Error fetching data: ", error);
//                 }
//             });
//             this.getView().setModel(oModel);
//             this.getView().byId("_IDGenButtonView").attachPress(this.onNavigate.bind(this));
//         },
//         // onViewDetails: function() {
//         //     var oRouter = UIComponent.getRouterFor(this);
//         //     oRouter.navTo("firstPage"); // Navigates to the Submitted Records page
//         // }
//         onNavigate: function (oEvent) {
//             console.log("View Details Button Clicked!"); // Debugging step
       
//             var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//             console.log("Router Instance:", oRouter); // Check if Router is available
       
//             var sEmployeeID = oEvent.getSource().getBindingContext().getProperty("employeeID");
//             console.log("Employee ID:", sEmployeeID); // Check if ID is being retrieved
       
//             // Navigate to Employee Details page with Employee ID as a parameter
//             if (oRouter && sEmployeeID) {
//                 oRouter.navTo("firstPage", {
//                     EmployeeID: sEmployeeID
//                 });
//             } else {
//                 console.error("Navigation failed: Router or Employee ID missing.");
//             }
//         }
//     });
// });
 
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/UIComponent",
], function (Controller, JSONModel,UIComponent) {
    "use strict";
    return Controller.extend("ns.task.controller.Home", {
        onInit: function () {
            var oModel = new JSONModel();
            var that = this;
            $.ajax({
                url: "/odata/v4/detail/Student_Details",  // OData endpoint
                type: "GET",
                dataType: "json",
                success: function (data) {
                    console.log("Data fetched successfully:", data);
                    oModel.setData({ Employees: data.value });
                    that.getView().setModel(oModel);
                },
                error: function (xhr, status, error) {
                    console.error("Error fetching data: ", error);
                }
            });
            this.getView().setModel(oModel);
            this.getView().byId("_IDGenButtonView").attachPress(this.onNavigate.bind(this));
        },
        onNavigate: function (oEvent) {
            console.log("View Details Button Clicked!"); // Debugging step
       
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            console.log("Router Instance:", oRouter); // Check if Router is available
       
            var sEmployeeID = oEvent.getSource().getBindingContext().getProperty("employeeID");
            console.log("Employee ID:", sEmployeeID); // Check if ID is being retrieved
       
            // Navigate to Employee Details page with Employee ID as a parameter
            if (oRouter && sEmployeeID) {
                oRouter.navTo("firstPage", {
                    EmployeeID: sEmployeeID
                });
            } else {
                console.error("Navigation failed: Router or Employee ID missing.");
            }
        }
    });
});