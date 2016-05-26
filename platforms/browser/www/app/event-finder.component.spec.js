System.register(['angular2/testing', '../app/event-finder.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, event_finder_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (event_finder_component_1_1) {
                event_finder_component_1 = event_finder_component_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [event_finder_component_1.EventFinderApp]; });
        }
    }
});
//# sourceMappingURL=event-finder.component.spec.js.map