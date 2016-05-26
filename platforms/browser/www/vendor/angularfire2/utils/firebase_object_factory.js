"use strict";
var firebase_object_observable_1 = require('./firebase_object_observable');
var Firebase = require('firebase');
var utils = require('./utils');
function FirebaseObjectFactory(absoluteUrlOrDbRef, _a) {
    var preserveSnapshot = (_a === void 0 ? {} : _a).preserveSnapshot;
    var ref;
    utils.checkForUrlOrFirebaseRef(absoluteUrlOrDbRef, {
        isUrl: function () { return ref = new Firebase(absoluteUrlOrDbRef); },
        isRef: function () { return ref = absoluteUrlOrDbRef; }
    });
    return new firebase_object_observable_1.FirebaseObjectObservable(function (obs) {
        ref.on('value', function (snapshot) {
            obs.next(preserveSnapshot ? snapshot : snapshot.val());
        });
        return function () { return ref.off(); };
    }, ref);
}
exports.FirebaseObjectFactory = FirebaseObjectFactory;
//# sourceMappingURL=firebase_object_factory.js.map