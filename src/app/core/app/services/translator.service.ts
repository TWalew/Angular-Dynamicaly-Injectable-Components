import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslatorService {
  constructor(private translateService: TranslateService) {}

  public trans(key: string): string {
    let trans = '';

    this.translateService
      .get(key)
      .pipe(take(1))
      .subscribe(translation => {
        trans = translation;
      });
    console.log(trans);
    return trans;
  }
}
