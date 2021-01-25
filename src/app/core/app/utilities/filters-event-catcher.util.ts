import { FilterEventInterface } from '../interfaces/filter-event.interface';
import { FiltersService } from '../services/filters.service';

export class FiltersEventCatcher {
    public static initialize(filtersService: FiltersService, filters, callbackFunction: any) {
        return filtersService.subscribe((filter: FilterEventInterface) => {
            if (filter.purpose !== 'page' && filters.page) {
                filters.page = 1;
            }

            if (filter.data && filter.data.length !== 0 || filter.data === false) {
                filters[filter.purpose] = filter.data;
            } else {
                delete filters[filter.purpose];
            }

            callbackFunction();
        });
    }
}
