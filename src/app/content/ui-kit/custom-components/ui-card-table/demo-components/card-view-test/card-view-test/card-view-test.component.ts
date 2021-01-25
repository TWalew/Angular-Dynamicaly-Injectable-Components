import { Component } from '@angular/core';
import { ComponentConfigInterface } from 'src/app/core/app/interfaces/component-config.interface';

@Component({
  selector: 'app-card-view-test',
  templateUrl: './card-view-test.component.html',
})
export class CardViewTestComponent {
  constructor(public config: ComponentConfigInterface) {}

  public objectValues(obj) {
    console.log(obj);
    console.log(Object.values(obj));
    return Object.values(obj);
  }

  public objectKeys(obj) {
    console.log(obj);
    console.log(Object.keys(obj));
    return Object.keys(obj);
  }

  public sss(obj) {
    return obj;
  }
}
