import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiProgressBarComponent } from './ui-progress-bar.component';
import { ProgressBarModule } from 'src/app/content/shared/components/partials/progress-bar/progress-bar.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        ProgressBarModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiProgressBarComponent,
            },
        ]),
    ],
    exports: [
        UiProgressBarComponent
    ],
    declarations: [
        UiProgressBarComponent
    ]
})
export class UiProgressBarModule { }
