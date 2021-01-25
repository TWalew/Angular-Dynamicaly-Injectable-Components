import { UiCardTableComponent } from './ui-card-table.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardTableModule } from 'src/app/content/shared/components/partials/card-table/card-table.module';

@NgModule({
    declarations: [
        UiCardTableComponent
    ],
    imports: [
        CommonModule,
        CardTableModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiCardTableComponent
            }
        ]),
        FontAwesomeModule
    ]
})
export class UICardTableModule { }
