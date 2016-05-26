System.register(['angular2/testing', './my-event-container.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, my_event_container_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (my_event_container_component_1_1) {
                my_event_container_component_1 = my_event_container_component_1_1;
            }],
        execute: function() {
            testing_1.describe('MyEventContainer Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(my_event_container_component_1.MyEventContainerComponent).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=my-event-container.component.spec.js.map