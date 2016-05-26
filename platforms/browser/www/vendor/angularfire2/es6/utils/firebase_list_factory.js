import { FirebaseListObservable } from './firebase_list_observable';
import * as Firebase from 'firebase';
import * as utils from './utils';
export function FirebaseListFactory(absoluteUrlOrDbRef, { preserveSnapshot } = {}) {
    let ref;
    utils.checkForUrlOrFirebaseRef(absoluteUrlOrDbRef, {
        isUrl: () => ref = new Firebase(absoluteUrlOrDbRef),
        isRef: () => ref = absoluteUrlOrDbRef
    });
    return new FirebaseListObservable((obs) => {
        let arr = [];
        let hasInitialLoad = false;
        ref.once('value', (snap) => {
            hasInitialLoad = true;
            obs.next(preserveSnapshot ? arr : arr.map(unwrapMapFn));
        });
        ref.on('child_added', (child, prevKey) => {
            arr = onChildAdded(arr, child, prevKey);
            if (hasInitialLoad) {
                obs.next(preserveSnapshot ? arr : arr.map(unwrapMapFn));
            }
        });
        ref.on('child_removed', (child) => {
            arr = onChildRemoved(arr, child);
            if (hasInitialLoad) {
                obs.next(preserveSnapshot ? arr : arr.map(unwrapMapFn));
            }
        });
        ref.on('child_changed', (child, prevKey) => {
            arr = onChildChanged(arr, child, prevKey);
            if (hasInitialLoad) {
                obs.next(preserveSnapshot ? arr : arr.map(unwrapMapFn));
            }
        });
        return () => ref.off();
    }, ref);
}
export function unwrapMapFn(snapshot) {
    var unwrapped = snapshot.val();
    if ((/string|number|boolean/).test(typeof unwrapped)) {
        unwrapped = {
            $value: unwrapped
        };
    }
    unwrapped.$key = snapshot.key();
    return unwrapped;
}
export function onChildAdded(arr, child, prevKey) {
    if (!arr.length) {
        return [child];
    }
    return arr.reduce((accumulator, curr, i) => {
        if (!prevKey && i === 0) {
            accumulator.push(child);
        }
        accumulator.push(curr);
        if (prevKey && prevKey === curr.key()) {
            accumulator.push(child);
        }
        return accumulator;
    }, []);
}
export function onChildChanged(arr, child, prevKey) {
    return arr.reduce((accumulator, val, i) => {
        if (!prevKey && i == 0) {
            accumulator.push(child);
            accumulator.push(val);
        }
        else if (val.key() === prevKey) {
            accumulator.push(val);
            accumulator.push(child);
        }
        else if (val.key() !== child.key()) {
            accumulator.push(val);
        }
        return accumulator;
    }, []);
}
export function onChildRemoved(arr, child) {
    return arr.filter(c => c.key() !== child.key());
}
export function onChildUpdated(arr, child, prevKey) {
    return arr.map((v, i, arr) => {
        if (!prevKey && !i) {
            return child;
        }
        else if (i > 0 && arr[i - 1].key() === prevKey) {
            return child;
        }
        else {
            return v;
        }
    });
}
//# sourceMappingURL=firebase_list_factory.js.map