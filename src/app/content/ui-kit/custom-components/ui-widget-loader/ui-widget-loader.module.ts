import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetLoaderModule } from '../../../shared/components/partials/widget-loader/widget-loader.module';
import { UiWidgetLoaderComponent } from './ui-widget-loader.component';

@NgModule({
    declarations: [
        UiWidgetLoaderComponent
    ],
    imports: [
        CommonModule,
        WidgetLoaderModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiWidgetLoaderComponent
            }
        ])
    ]
})
export class UiWidgetLoaderModule {
}
