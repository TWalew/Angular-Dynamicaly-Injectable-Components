import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UiBannerComponent } from './ui-banner.component';
import { BannerModule } from '../../../shared/components/partials/banner/banner.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import { LoaderButtonModule } from '../../../shared/components/partials/loader-button/loader-button.module';

@NgModule({
    declarations: [
        UiBannerComponent
    ],
    imports: [
        CommonModule,
        BannerModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiBannerComponent,
            },
        ]),
        FontAwesomeModule,
        MatRippleModule,
        LoaderButtonModule,
    ],
})
export class UIBannerModule { }
