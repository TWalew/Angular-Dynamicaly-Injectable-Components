import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from './date.pipe';
import { DateTimePipe } from './date-time.pipe';
import { RoundNumberPipe } from './round-number.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { ReplaceParamsInContentPipe } from './replace-params-in-content.pipe';

@NgModule({
    declarations: [
        DatePipe,
        DateTimePipe,
        RoundNumberPipe,
        TimeAgoPipe,
        ReplaceParamsInContentPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DatePipe,
        DateTimePipe,
        RoundNumberPipe,
        TimeAgoPipe,
        ReplaceParamsInContentPipe
    ],
    providers: [
        RoundNumberPipe
    ]
})
export class PipesModule {
}
