import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderButtonComponent } from './slider-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        SliderButtonComponent
    ],
    declarations: [
        SliderButtonComponent
    ]
})
export class SliderButtonModule { }
