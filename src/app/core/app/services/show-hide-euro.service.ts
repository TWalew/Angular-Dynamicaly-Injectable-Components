import { EventService } from './event.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShowHideEuroService {

    public currentCurrency: string = 'btc';

    constructor(
        private eventService: EventService
    ) { }

    public getCurrentCurrency(): string {
        return this.currentCurrency;
    }

    public changeCurrency(currency: string): void {
        this.currentCurrency = currency;
        this.eventService.updateValue('change-currency');
    }
}
