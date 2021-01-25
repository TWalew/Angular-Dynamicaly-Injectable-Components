import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { UiKitRoutingModule } from './ui-kit-routing.module';
import { NgModule } from '@angular/core';
import { UiKitComponent } from './ui-kit.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, UiKitRoutingModule, MatButtonModule, TranslateModule, FontAwesomeModule],
  exports: [UiKitComponent],
  declarations: [UiKitComponent],
})
export class UiKitModule {}
