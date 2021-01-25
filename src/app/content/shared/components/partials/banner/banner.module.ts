import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        BannerComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatExpansionModule,
        MatButtonModule,
        TranslateModule,
    ],
    exports: [
        BannerComponent
    ]
})
export class BannerModule {
}
