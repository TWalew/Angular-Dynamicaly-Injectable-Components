import { Router } from '@angular/router';

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FiltersService } from 'src/app/core/app/services/filters.service';
import { DateService } from 'src/app/core/app/services/date.service';


@Component({
    selector: 'app-from-to-filters',
    templateUrl: './from-to-filters.component.html'
})
export class FromToFiltersComponent {

    public today: Date = this.dateService.getTodayDate()
    public todayMinusWeek: Date = this.dateService.getTodayMinusDaysDate(6);

    public fromFilterPurpose = 'from';
    public toFilterPurpose = 'to';
    public typeFilterPurpose = 'type';

    public filtersFormGroup = new FormGroup({
        from: new FormControl(this.todayMinusWeek),
        to: new FormControl(this.today),
    });

    constructor(
        private filterService: FiltersService,
        private dateService: DateService,
        private router: Router
    ) {
        if (this.router.url.includes('invoices') || this.router.url.includes('Invoices')) {
            this.fromFilterPurpose = 'date[after]';
            this.toFilterPurpose = 'date[before]';
        } else if (this.router.url.includes('payments') || this.router.url.includes('Payments')) {
            this.fromFilterPurpose = 'order.createdAt[after]';
            this.toFilterPurpose = 'order.createdAt[before]';
        } else if (this.router.url.includes('vouchers') || this.router.url.includes('Vouchers')) {
            this.fromFilterPurpose = 'createdAt[after]';
            this.toFilterPurpose = 'createdAt[before]';
        }
    }

    public dateFilterChange(purpose: string, value: string): void {
        if (isNaN(this.dateService.getTimeStamp(value))) {
            this.filterChange(purpose, value);
        } else {
            if (purpose.includes('[before]')) {
                this.filterChange(purpose, new Date(new Date(value).setHours(23, 59, 59)).toISOString());
            } else {
                this.filterChange(purpose, new Date(new Date(value).setHours(0, 0, 0)).toISOString());
            }
        }
    }

    public filterChange(purpose: string, value: string) {
        this.filterService.change(purpose, value);
    }
}
