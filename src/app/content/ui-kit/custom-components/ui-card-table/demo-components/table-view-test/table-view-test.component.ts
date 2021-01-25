import { ComponentConfigInterface } from '../../../../../../core/app/interfaces/component-config.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table-row-test',
  templateUrl: './table-view-test.component.html',
})
export class TableViewTestComponent {
  constructor(public config: ComponentConfigInterface) {}

  public objectValues(obj) {
    return Object.values(obj);
  }
}
