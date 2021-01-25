import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ParseNumberInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(map((response: HttpResponse<any>) => {
            if (response.body) {
                this.parseResponse(response.body["hydra:member"] || response.body);
            }

            return response;
        }));
    }

    private parseResponse(body: any): any {
        // tslint:disable-next-line:forin
        for (const object in body) {
            if (typeof body[object] === 'object') {
                this.parseResponse(body[object]);
            }

            const objectValue = Array.isArray(body[object]) || !body[object] ? undefined : Number(body[object]);

            if (!isNaN(objectValue)) {
                body[object] = objectValue;
            }
        }
    }
}
