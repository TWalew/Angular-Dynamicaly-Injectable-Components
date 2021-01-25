import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Theme } from "../enums/theme.enum";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  private darkStyles: object = {
    "--bg-app": "#292a2c",
    "--bg-sidenav": "#303133",
    "--bg-sidenav-gradient":
      "linear-gradient(270deg, rgba(34,34,34,0.2) 0%, rgba(0,0,0,0) 100%)",
    "--bg-header": "#3b3c3e",
    "--bg-form-field": "#444547",
    "--bg-widget-wrapper": "#3b3c3e",
    "--bg-footer": "#3b3c3e",
    "--bg-items": "#3b3c3e",
    "--bg-loading-block": "rgba(0, 0, 0, 0.6)",
    "--bg-dropdown": "#3b3c3e",
    "--bg-dropdown-item-hover": "#333335",
    "--bg-expand-selected": "#303133",
    "--bg-mobile-expand": "#3b3c3e",
    "--base-color": "white",
    "--disabled": "#7e7e81",
    "--disabled-rgba": "rgba(100, 100, 103, 1)",
    "--base-items-color": "white",
    "--sidenav-tools": "#292A2C",
    "--sidenav-shadow": "0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24)",
    "--border-top-mobile-expand": "#444547",
    "--mat-icons-color": "white",
    "--mat-tooltip-color": "#1fcd94",
    "--btc-accounted-color": "#1fcd94",
    "--bg-banking-table-row": "#464646",
    "--bg-table-row-hover": "#525252",
    "--bg-glass": "rgba(0,0,0,0.3)",
    "--notifications-wrapper-color": "#454545"
  };

  constructor() {}

  public initialize(): void {
    this.changeTheme(Theme.DARK);
  }

  public changeTheme(theme: string): void {
    if (theme === Theme.DARK || !theme) {
      // tslint:disable-next-line:forin
      for (const style in this.darkStyles) {
        document.documentElement.style.setProperty(
          style,
          this.darkStyles[style]
        );
      }
    }

    if (theme === Theme.LIGHT) {
      // tslint:disable-next-line:forin
      for (const style in this.darkStyles) {
        document.documentElement.style.removeProperty(style);
      }
    }
  }
}
