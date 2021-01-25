import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyChartComponent } from './empty-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
    declarations: [EmptyChartComponent],
    imports: [
        CommonModule,
        HighchartsChartModule
    ],
    exports: [EmptyChartComponent]
})
export class EmptyChartModule {
}
