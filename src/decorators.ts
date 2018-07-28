export function sealed(p: string) {
    return function (target: Function): void {
        console.log(`Sealing the constructor ${p}`);
        // console.log(target);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor: Function = function () {
        console.log(`Creating new instance`);
        console.log(target);
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.constructor = target;

    return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
    return function (target: Object, method: string, descriptor: PropertyDescriptor) {
        console.log(`Decorating method: ${method}`);

        descriptor.writable = isWritable;
    }
}