import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiEmptyChartComponent } from './ui-empty-chart.component';
import { EmptyChartModule } from 'src/app/content/shared/components/partials/empty-chart/empty-chart.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        EmptyChartModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiEmptyChartComponent,
            },
        ]),
    ],
    exports: [
        UiEmptyChartComponent
    ],
    declarations: [
        UiEmptyChartComponent
    ]
})
export class UiEmptyChartModule { }
