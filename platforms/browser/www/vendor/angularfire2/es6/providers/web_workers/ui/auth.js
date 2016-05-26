var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from 'angular2/core';
import { ServiceMessageBrokerFactory, PRIMITIVE } from 'angular2/platform/worker_render';
import { AUTH_CHANNEL } from '../shared/channels';
import { FirebaseSdkAuthBackend } from '../../firebase_sdk_auth_backend';
export let MessageBasedFirebaseAuth = class MessageBasedFirebaseAuth {
    constructor(_sdkBackend, _brokerFactory) {
        this._sdkBackend = _sdkBackend;
        this._brokerFactory = _brokerFactory;
    }
    start() {
        let broker = this._brokerFactory.createMessageBroker(AUTH_CHANNEL);
        broker.registerMethod('authAnonymously', [PRIMITIVE], this._sdkBackend.authAnonymously.bind(this._sdkBackend), PRIMITIVE);
        broker.registerMethod('authWithPassword', [PRIMITIVE, PRIMITIVE], this._sdkBackend.authWithPassword.bind(this._sdkBackend), PRIMITIVE);
        broker.registerMethod('authWithOAuthPopup', [PRIMITIVE, PRIMITIVE], this._sdkBackend.authWithOAuthPopup.bind(this._sdkBackend), PRIMITIVE);
        broker.registerMethod('authWithOAuthRedirect', [PRIMITIVE, PRIMITIVE], this._sdkBackend.authWithOAuthRedirect.bind(this._sdkBackend), PRIMITIVE);
        broker.registerMethod('authWithOAuthToken', [PRIMITIVE, PRIMITIVE, PRIMITIVE], this._sdkBackend.authWithOAuthToken.bind(this._sdkBackend), PRIMITIVE);
        broker.registerMethod('getAuth', null, this._getAuth.bind(this), PRIMITIVE);
        broker.registerMethod('unauth', null, this._sdkBackend.unauth.bind(this._sdkBackend));
    }
    _getAuth() {
        return new Promise((res, rej) => {
            res(this._sdkBackend.getAuth());
        });
    }
};
MessageBasedFirebaseAuth = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [FirebaseSdkAuthBackend, ServiceMessageBrokerFactory])
], MessageBasedFirebaseAuth);
//# sourceMappingURL=auth.js.map