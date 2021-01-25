import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { emptyChart } from '../../charts/empty-chart';

@Component({
    selector: 'empty-chart',
    templateUrl: './empty-chart.component.html'
})
export class EmptyChartComponent implements OnInit {
    public highcharts: any = Highcharts;
    public emptyChartView: any = emptyChart;
    @Input() public componentHeight: number;

    public ngOnInit(): void {
        if (this.componentHeight) {
            this.emptyChartView.chart.height = this.componentHeight + 'px';
        }
    }
}
