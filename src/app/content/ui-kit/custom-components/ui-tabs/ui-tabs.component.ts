import { Component } from '@angular/core';
import { tabs } from './config/tabs';
import { TabInterface } from '../../../../core/app/interfaces/tab.interface';

@Component({
    selector: 'app-ui-tabs',
    templateUrl: './ui-tabs.component.html'
})
export class UiTabsComponent {

    public tabs: TabInterface[] = tabs;
}
