import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationComponent } from './pagination.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatRippleModule,
        TranslateModule
    ],
    exports: [
        PaginationComponent
    ],
    declarations: [
        PaginationComponent
    ]
})
export class PaginationModule { }
