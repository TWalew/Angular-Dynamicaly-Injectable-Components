import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderEvent } from '../interfaces/loader-event';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public emitter: EventEmitter<LoaderEvent>;

    constructor() {
        this.emitter = new EventEmitter<LoaderEvent>(true);
    }

    public start(purpose: string): void {
        this.emitter.emit({ purpose, isLoading: true });
    }

    public stop(purpose: string, data?: any, additionalData?: any, meta?: any): void {
        this.emitter.emit({ purpose, isLoading: false, data, additionalData, meta });
    }

    public init(purpose: string, data?: any): void {
        this.emitter.emit(new LoaderEvent(purpose, false, data));
    }

    public subscribe(generatorOrNext?: any, error?: any, complete?: any): Subscription {
        return this.emitter.subscribe(generatorOrNext, error, complete);
    }
}
