import { FirebaseObjectObservable } from './firebase_object_observable';
import * as Firebase from 'firebase';
import * as utils from './utils';
export function FirebaseObjectFactory(absoluteUrlOrDbRef, { preserveSnapshot } = {}) {
    let ref;
    utils.checkForUrlOrFirebaseRef(absoluteUrlOrDbRef, {
        isUrl: () => ref = new Firebase(absoluteUrlOrDbRef),
        isRef: () => ref = absoluteUrlOrDbRef
    });
    return new FirebaseObjectObservable((obs) => {
        ref.on('value', (snapshot) => {
            obs.next(preserveSnapshot ? snapshot : snapshot.val());
        });
        return () => ref.off();
    }, ref);
}
//# sourceMappingURL=firebase_object_factory.js.map