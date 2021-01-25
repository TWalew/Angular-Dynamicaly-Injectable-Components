import { NgModule } from '@angular/core';
import { LoaderButtonComponent } from './loader-button.component';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        TranslateModule,
        FontAwesomeModule
    ],
    exports: [
        LoaderButtonComponent
    ],
    declarations: [
        LoaderButtonComponent
    ]
})
export class LoaderButtonModule { }
