import { NgModule } from '@angular/core';
import { TabModule } from 'src/app/content/shared/components/partials/tab/tab.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiTabsComponent } from './ui-tabs.component';

@NgModule({
    declarations: [
        UiTabsComponent
    ],
    imports: [
        CommonModule,
        TabModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiTabsComponent
            }
        ]),
        FontAwesomeModule
    ]
})
export class UITabsModule { }
