import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [TimelineComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatButtonModule,
    ],
    exports: [TimelineComponent]
})
export class TimelineModule {
}
