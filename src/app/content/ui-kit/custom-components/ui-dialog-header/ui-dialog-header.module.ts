import { DialogHeaderModule } from 'src/app/content/shared/components/partials/dialog-header/dialog-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDialogHeaderComponent } from './ui-dialog-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        DialogHeaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiDialogHeaderComponent,
            },
        ]),
    ],
    exports: [
        UiDialogHeaderComponent
    ],
    declarations: [
        UiDialogHeaderComponent
    ]
})
export class UiDialogHeaderModule { }
