import { Component, OnInit } from "@angular/core";
import { LocaleResolverService } from "./core/app/services/locale-resolver.service";
import { ThemeService } from "./core/app/services/theme.service";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    <div class="alert-wrapper"></div>
  `,
})
export class AppComponent implements OnInit {
  constructor(
    private localeResolverService: LocaleResolverService,
    private themeService: ThemeService,
    private library: FaIconLibrary
  ) {}

  ngOnInit(): void {
    this.library.addIconPacks(fas, fab, far);
    this.localeResolverService.addLocales(["en", "es"]);
    const lang = this.localeResolverService.resolve();
    console.log(lang);
    this.localeResolverService.setDefaultLocale(lang);
    this.themeService.initialize();
  }
}
