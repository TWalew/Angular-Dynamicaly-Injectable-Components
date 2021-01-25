import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';
import { TabComponent } from './tab.component';
import { MatMenuModule } from '@angular/material/menu';
import { InjectorModule } from '../injector/injector.module';
import { TabContentModule } from '../tab-content/tab-content.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        InjectorModule,
        FontAwesomeModule,
        MatTabsModule,
        MatMenuModule,
        TabContentModule
    ],
    exports: [
        TabComponent
    ],
    declarations: [
        TabComponent
    ]
})
export class TabModule {
}
