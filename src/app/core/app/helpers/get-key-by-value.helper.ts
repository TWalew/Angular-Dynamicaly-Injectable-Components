export function getKeyByValueOrObjectValue(object: object, value: string | { [key: string]: string }): string {
    if (value) {
        if (typeof value === 'string') {
            return Object.keys(object).find(key => object[key] === value);
        } else {
            return value.key;
        }
    }
}
