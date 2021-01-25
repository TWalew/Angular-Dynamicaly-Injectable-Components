import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressBarComponent } from './circle-progress-bar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [CircleProgressBarComponent],
    imports: [
        CommonModule,
        NgCircleProgressModule,
        FontAwesomeModule
    ],
    exports: [CircleProgressBarComponent]
})
export class CircleProgressBarModule {
}
