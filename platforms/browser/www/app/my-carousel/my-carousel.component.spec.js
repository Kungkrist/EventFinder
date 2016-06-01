"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var my_carousel_component_1 = require('./my-carousel.component');
testing_1.describe('MyCarousel Component', function () {
    testing_1.beforeEachProviders(function () { return []; });
    testing_1.it('should ...', testing_1.injectAsync([testing_2.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(my_carousel_component_1.MyCarouselComponent).then(function (fixture) {
            fixture.detectChanges();
        });
    }));
});
//# sourceMappingURL=/Users/iths/Documents/VS code projects/EventFinder/tmp/broccoli_type_script_compiler-input_base_path-1fYFoSrg.tmp/0/app/my-carousel/my-carousel.component.spec.js.map