import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetLoaderComponent } from './widget-loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        WidgetLoaderComponent
    ],
    declarations: [
        WidgetLoaderComponent
    ]
})
export class WidgetLoaderModule { }
