import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAlertComponent } from './ui-alert.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiAlertComponent,
            },
        ]),
    ],
    exports: [
        UiAlertComponent
    ],
    declarations: [
        UiAlertComponent
    ]
})
export class UiAlertModule { }
