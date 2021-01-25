import { EventEmitter, Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class LocaleResolverService {
  constructor(private translate: TranslateService) {}

  public addLocales(locales: string[]): void {
    this.translate.addLangs(locales);
  }

  public setDefaultLocale(locale: string): void {
    this.translate.setDefaultLang(locale);
  }

  public currentLocale(): string {
    return this.translate.currentLang;
  }

  public onLocaleChange(): EventEmitter<LangChangeEvent> {
    return this.translate.onLangChange;
  }

  public resolve(): string {
    for (const locale of navigator.languages) {
      if (this.translate.langs.includes(locale)) {
        return locale;
      }

      const splitLocale = locale.split('-')[0];

      if (this.translate.langs.includes(splitLocale)) {
        return splitLocale;
      }
    }

    return environment.settings.defaultLanguage;
  }
}
