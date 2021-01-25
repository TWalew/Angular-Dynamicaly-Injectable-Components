import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from '../services/date.service';

@Pipe({
    name: 'formatDate'
})
export class DatePipe implements PipeTransform {

    constructor(
        private dateService: DateService
    ) { }

    public transform(value: string, args?: string): string {
        if (!value) {
            return value;
        }

        return this.dateService.parseDate(value, args);
    }

}
