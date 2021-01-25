import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MessageService {
    private dataSource = new BehaviorSubject<string>('');
    public appGlobalMessage: Observable<string> = this.dataSource.asObservable();

    public updateValue(value: string): void {
        this.dataSource.next(value);
    }
}
