import { CircleProgressBarModule } from './../../../shared/components/partials/circle-progress-bar/circle-progress-bar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCircleProgressBarComponent } from './ui-circle-progress-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        CircleProgressBarModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiCircleProgressBarComponent,
            },
        ]),
    ],
    exports: [
        UiCircleProgressBarComponent
    ],
    declarations: [
        UiCircleProgressBarComponent
    ]
})
export class UiCircleProgressBarModule { }
