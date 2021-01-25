import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from '../services/date.service';

@Pipe({
    name: 'formatDateTime'
})
export class DateTimePipe implements PipeTransform {

    constructor(
        private dateService: DateService
    ) { }

    public transform(value: string): string {
        if (!value) {
            return value;
        }

        return this.dateService.parseDateTime(value, navigator.language.split('-')[0]);
    }

}
