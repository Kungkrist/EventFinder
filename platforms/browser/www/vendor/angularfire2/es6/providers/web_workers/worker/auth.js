var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable, Inject } from 'angular2/core';
import { ClientMessageBrokerFactory, FnArg, UiArguments } from 'angular2/src/web_workers/shared/client_message_broker';
import { MessageBus } from 'angular2/src/web_workers/shared/message_bus';
import { PRIMITIVE } from 'angular2/src/web_workers/shared/serializer';
import { AUTH_CHANNEL } from '../shared/channels';
import { FirebaseRef } from '../../../tokens';
import { AuthBackend, authDataToAuthState } from '../../auth_backend';
import { isPresent } from '../../../utils/utils';
import * as Firebase from 'firebase';
export let WebWorkerFirebaseAuth = class WebWorkerFirebaseAuth extends AuthBackend {
    constructor(_fbRef, brokerFactory, bus) {
        super();
        this._fbRef = _fbRef;
        this._authMetadata = {};
        this._authCbs = [];
        this._gotAuth = false;
        this._messageBroker = brokerFactory.createMessageBroker(AUTH_CHANNEL);
        let args = new UiArguments('getAuth');
        this._messageBroker.runOnService(args, PRIMITIVE).then((authData) => {
            this._gotAuth = true;
            if (authData != null) {
                this._handleAuthPromise(authData);
            }
        });
    }
    onAuth(onComplete) {
        this._fbRef.onAuth((authData) => {
            if (!this._gotAuth)
                return false;
            if (isPresent(authData) && isPresent(this._authMetadata[authData.token])) {
                authData = this._authMetadata[authData.token];
            }
            onComplete(authData);
        });
    }
    getAuth() {
        return this._fbRef.getAuth();
    }
    createUser(creds) {
        return new Promise((resolve, reject) => {
            this._fbRef.createUser(creds, (err, authData) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(authData);
                }
            });
        });
    }
    authAnonymously(options) {
        let args = new UiArguments('authAnonymously', [new FnArg(options, PRIMITIVE)]);
        let uiAuthPromise = this._messageBroker.runOnService(args, PRIMITIVE);
        return this._doAuth(uiAuthPromise);
    }
    authWithCustomToken(token, options) {
        return new Promise((res, rej) => {
            this._fbRef.authWithCustomToken(token, (err, authData) => {
                if (err)
                    return rej(err);
                else
                    return res(authDataToAuthState(authData));
            });
        });
    }
    authWithPassword(credentials, options) {
        let args = new UiArguments('authWithPassword', [new FnArg(credentials, PRIMITIVE), new FnArg(options, PRIMITIVE)]);
        let uiAuthPromise = this._messageBroker.runOnService(args, PRIMITIVE);
        return this._doAuth(uiAuthPromise);
    }
    authWithOAuthPopup(provider, options) {
        let args = new UiArguments('authWithOAuthPopup', [new FnArg(provider, PRIMITIVE), new FnArg(options, PRIMITIVE)]);
        let uiAuthPromise = this._messageBroker.runOnService(args, PRIMITIVE);
        return this._doAuth(uiAuthPromise);
    }
    authWithOAuthRedirect(provider, options) {
        let args = new UiArguments('authWithOAuthRedirect', [new FnArg(provider, PRIMITIVE), new FnArg(options, PRIMITIVE)]);
        let uiAuthPromise = this._messageBroker.runOnService(args, PRIMITIVE);
        return this._doAuth(uiAuthPromise);
    }
    authWithOAuthToken(provider, credentialsObj, options) {
        let args = new UiArguments('authWithOAuthToken', [new FnArg(provider, PRIMITIVE),
            new FnArg(credentialsObj, PRIMITIVE),
            new FnArg(options, PRIMITIVE)]);
        let uiAuthPromise = this._messageBroker.runOnService(args, PRIMITIVE);
        return this._doAuth(uiAuthPromise);
    }
    unauth() {
        let args = new UiArguments('unauth');
        this._messageBroker.runOnService(args, null);
        this._fbRef.unauth();
    }
    _doAuth(promise) {
        return promise.then((data) => this._handleAuthPromise(data));
    }
    _handleAuthPromise(authData) {
        this._authMetadata[authData.token] = authData;
        return new Promise((res, rej) => {
            this._fbRef.authWithCustomToken(authData.token, (err, _) => {
                if (err)
                    return rej(err);
                else
                    return res(authDataToAuthState(authData));
            }, { remember: authData.remember });
        });
    }
};
WebWorkerFirebaseAuth = __decorate([
    Injectable(),
    __param(0, Inject(FirebaseRef)), 
    __metadata('design:paramtypes', [Firebase, ClientMessageBrokerFactory, MessageBus])
], WebWorkerFirebaseAuth);
//# sourceMappingURL=auth.js.map