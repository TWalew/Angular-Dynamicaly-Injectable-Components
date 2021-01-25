import { Injectable, EventEmitter } from '@angular/core';
import { FilterEventInterface } from '../interfaces/filter-event.interface';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FiltersService {
    private emitter: EventEmitter<FilterEventInterface>;

    constructor() {
        this.emitter = new EventEmitter();
    }

    public change(purpose: string, data?: any): void {
        this.emitter.emit(new FilterEventInterface(purpose, data));
    }

    public subscribe(generatorOrNext?: any, error?: any, complete?: any): Subscription {
        return this.emitter.subscribe(generatorOrNext, error, complete);
    }

    public unsubscribe(): void {
        this.emitter.unsubscribe();
    }
}
