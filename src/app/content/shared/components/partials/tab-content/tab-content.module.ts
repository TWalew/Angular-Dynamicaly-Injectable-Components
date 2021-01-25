import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SecondTabNestedComponent } from "../../../../ui-kit/custom-components/ui-tabs/partials/second-tab-nested/second-tab-nested.component";
import { FirstTabComponent } from "../../../../ui-kit/custom-components/ui-tabs/partials/first-tab/first-tab.component";
import { FirstTabModule } from "../../../../ui-kit/custom-components/ui-tabs/partials/first-tab/first-tab.module";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { InjectorModule } from "../injector/injector.module";

import { TabContentComponent } from "./tab-content.component";

import { SecondTabNestedModule } from "src/app/content/ui-kit/custom-components/ui-tabs/partials/second-tab-nested/second-tab-nested.module";
import { ThirdTabNestedModule } from "src/app/content/ui-kit/custom-components/ui-tabs/partials/third-tab-nested/third-tab-nested.module";
import { ThirdTabNestedComponent } from "src/app/content/ui-kit/custom-components/ui-tabs/partials/third-tab-nested/third-tab-nested.component";

@NgModule({
  imports: [
    CommonModule,
    InjectorModule,
    FontAwesomeModule,

    // Add the modules of the components you want to append to content of tabs
    FirstTabModule,
    SecondTabNestedModule,
    ThirdTabNestedModule
  ],
  exports: [TabContentComponent],
  declarations: [TabContentComponent],
  entryComponents: [
    // Add the components of the components you want to append to content of tabs
    FirstTabComponent,
    SecondTabNestedComponent,
    ThirdTabNestedComponent
  ]
})
export class TabContentModule {}
