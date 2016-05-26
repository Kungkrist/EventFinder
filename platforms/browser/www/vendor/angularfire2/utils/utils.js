"use strict";
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isFirebaseRef(value) {
    return value instanceof Firebase;
}
exports.isFirebaseRef = isFirebaseRef;
function isFirebaseDataSnapshot(value) {
    return typeof value.key === 'function';
}
exports.isFirebaseDataSnapshot = isFirebaseDataSnapshot;
function isAFUnwrappedSnapshot(value) {
    return typeof value.$key === 'string';
}
exports.isAFUnwrappedSnapshot = isAFUnwrappedSnapshot;
function checkForUrlOrFirebaseRef(urlOrRef, cases) {
    if (isString(urlOrRef)) {
        return cases.isUrl();
    }
    if (isFirebaseRef(urlOrRef)) {
        return cases.isRef();
    }
    throw new Error('Provide a url or a Firebase database reference');
}
exports.checkForUrlOrFirebaseRef = checkForUrlOrFirebaseRef;
//# sourceMappingURL=utils.js.map