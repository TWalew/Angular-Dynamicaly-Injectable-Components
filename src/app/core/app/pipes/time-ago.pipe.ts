import { Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy, AfterViewInit } from "@angular/core";

import { TranslatorService } from '../services/translator.service';
import { DateService } from '../services/date.service';

@Pipe({
    name: 'timeAgo',
    pure: false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy, AfterViewInit {

    private timer: number;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private ngZone: NgZone,
        private dateService: DateService,
        private translatorService: TranslatorService
    ) { }

    public transform(value: string, locale: string) {
        this.removeTimer();
        let d = new Date(value);
        let now = new Date();
        let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        // let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;

        // this.timer = this.ngZone.runOutsideAngular(() => {
        //     if (typeof window !== 'undefined') {
        //         return window.setTimeout(() => {
        //             this.ngZone.run(() => this.changeDetectorRef.markForCheck());
        //         }, timeToUpdate);
        //     }
        //     return null;
        // });

        let minutes = Math.round(Math.abs(seconds / 60));
        let hours = Math.round(Math.abs(minutes / 60));

        if (Number.isNaN(seconds)) {
            return '';
        } else if (seconds <= 45) {
            return this.translatorService.trans('NOTIFICATIONS.A_FEW_SECONDS_AGO');
        } else if (seconds <= 90) {
            return this.translatorService.trans('NOTIFICATIONS.A_MINUTE_AGO');
        } else if (minutes <= 45) {
            return minutes + this.translatorService.trans('NOTIFICATIONS.MINUTES_AGO');;
        } else if (minutes <= 90) {
            return this.translatorService.trans('NOTIFICATIONS.AN_HOUR_AGO');
        } else if (hours <= 22) {
            return hours + this.translatorService.trans('NOTIFICATIONS.HOURS_AGO');;
        } else if (hours <= 36) {
            return this.translatorService.trans('NOTIFICATIONS.A_DAY_AGO');
        } else {
            return this.dateService.parseDateTime(value, locale);
        }
    }

    public ngAfterViewInit(): void {
        this.changeDetectorRef.detectChanges();
    }

    public ngOnDestroy(): void {
        //this.removeTimer();
    }

    private removeTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }

    private getSecondsUntilUpdate(seconds: number) {
        let min = 60;
        let hr = min * 60;
        let day = hr * 24;
        if (seconds < min) { // less than 1 min, update every 2 secs
            return 2;
        } else if (seconds < hr) { // less than an hour, update every 30 secs
            return 30;
        } else if (seconds < day) { // less then a day, update every 5 mins
            return 300;
        } else { // update every hour
            return 3600;
        }
    }
}
