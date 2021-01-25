import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderButtonModule } from '../../../shared/components/partials/slider-button/slider-button.module';
import { UiSliderComponent } from './ui-slider.component';

@NgModule({
    declarations: [
        UiSliderComponent
    ],
    imports: [
        CommonModule,
        SliderButtonModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiSliderComponent
            }
        ]),
        FontAwesomeModule
    ]
})
export class UiSliderModule {
}
