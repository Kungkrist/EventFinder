System.register(['angular2/testing', './event-data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, event_data_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (event_data_service_1_1) {
                event_data_service_1 = event_data_service_1_1;
            }],
        execute: function() {
            testing_1.describe('MockEvent Service', function () {
                testing_1.beforeEachProviders(function () { return [event_data_service_1.EventDataService]; });
                testing_1.it('should ...', testing_1.inject([event_data_service_1.EventDataService], function (service) {
                }));
            });
        }
    }
});
//# sourceMappingURL=event-data.service.spec.js.map