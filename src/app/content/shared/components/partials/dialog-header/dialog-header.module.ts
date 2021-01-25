import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogHeaderComponent } from './dialog-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [DialogHeaderComponent],
    imports: [
        CommonModule,
        TranslateModule,
        FontAwesomeModule,
        MatDialogModule
    ],
    exports: [
        DialogHeaderComponent
    ]
})
export class DialogHeaderModule {
}
