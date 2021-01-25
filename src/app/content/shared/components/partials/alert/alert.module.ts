import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        AlertComponent
    ],
    declarations: [
        AlertComponent
    ]
})
export class NotificationModule { }
