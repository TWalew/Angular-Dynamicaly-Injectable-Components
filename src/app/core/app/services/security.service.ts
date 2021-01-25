import { Injectable } from '@angular/core';

@Injectable()
export class SecurityService {
    private readonly salt: string = 'my-secret-salt';

    constructor() { }

    public encrypt(user) {
        user = encodeURIComponent(JSON.stringify(user));
        const textToChars = data => data.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ('0' + Number(n).toString(20)).substr(-2);
        const applySaltToChar = code => textToChars(this.salt).reduce((a, b) => a ^ b, code);

        return user.split('')
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join('');
    }

    public decrypt(user) {
        const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const applySaltToChar = code => textToChars(this.salt).reduce((a, b) => a ^ b, code);

        return JSON.parse(decodeURIComponent(user.match(/.{1,2}/g)
            .map(hex => parseInt(hex, 20))
            .map(applySaltToChar)
            .map(charCode => String.fromCharCode(charCode))
            .join('')));
    }
}
