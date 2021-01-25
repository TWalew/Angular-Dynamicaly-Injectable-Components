import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TwoFactorAuthenticationService {

    constructor(private http: HttpClient) {
    }

    public authenticate(request: HttpRequest<any>, twoFactorCode): Observable<any> {
        if (request.method === 'GET') {
            return this.http.get(request.url, { headers: this.buildHeaders(request, twoFactorCode) });
        }
        if (request.method === 'POST') {
            return this.http.post(request.url, request.body, { headers: this.buildHeaders(request, twoFactorCode) });
        }
        if (request.method === 'PUT') {
            return this.http.put(request.url, request.body, { headers: this.buildHeaders(request, twoFactorCode) });
        }
        if (request.method === 'DELETE') {
            return this.http.delete(request.url, { headers: this.buildHeaders(request, twoFactorCode) });
        }

        throw new Error(`The method ${request.method} is not supported.`);
    }

    private buildHeaders(request: HttpRequest<any>, twoFactorCode: string): HttpHeaders {
        let headers = new HttpHeaders();

        for (const header of request.headers.keys()) {
            headers = headers.set(header, request.headers.get(header));
        }

        return headers.set('JACK-2FA-CODE', twoFactorCode);
    }
}
