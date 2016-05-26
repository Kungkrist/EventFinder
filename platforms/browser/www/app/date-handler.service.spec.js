System.register(['angular2/testing', './date-handler.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, date_handler_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (date_handler_service_1_1) {
                date_handler_service_1 = date_handler_service_1_1;
            }],
        execute: function() {
            testing_1.describe('DateHandler Service', function () {
                testing_1.beforeEachProviders(function () { return [date_handler_service_1.DateHandlerService]; });
                testing_1.it('should ...', testing_1.inject([date_handler_service_1.DateHandlerService], function (service) {
                }));
            });
        }
    }
});
//# sourceMappingURL=date-handler.service.spec.js.map