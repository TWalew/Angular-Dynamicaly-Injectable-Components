import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiConfirmDialogComponent } from './ui-confirm-dialog.component';

@NgModule({
    declarations: [
        UiConfirmDialogComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiConfirmDialogComponent
            }
        ])
    ]
})
export class UiConfirmDialogModule {
}
