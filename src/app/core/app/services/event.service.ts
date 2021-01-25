import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    private dataSource = new BehaviorSubject<string>('');
    public data: Observable<string> = this.dataSource.asObservable();

    public updateValue(value: string): void {
        this.dataSource.next(value);
    }
}
