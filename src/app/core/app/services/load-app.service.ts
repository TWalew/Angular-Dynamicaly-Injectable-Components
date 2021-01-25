import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadAppService {
    private dataSource = new BehaviorSubject<boolean>(false);
    public appLoading: Observable<boolean> = this.dataSource.asObservable();

    public updateValue(value: boolean): void {
        this.dataSource.next(value);
    }
}
