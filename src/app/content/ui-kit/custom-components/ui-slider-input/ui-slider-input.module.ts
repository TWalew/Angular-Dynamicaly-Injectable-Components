import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSliderInputComponent } from './ui-slider-input.component';
import { SliderModule } from 'src/app/content/shared/components/partials/slider/slider.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        SliderModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiSliderInputComponent,
            }
        ]),
    ],
    exports: [
        UiSliderInputComponent
    ],
    declarations: [
        UiSliderInputComponent
    ]
})
export class UiSliderInputModule { }
