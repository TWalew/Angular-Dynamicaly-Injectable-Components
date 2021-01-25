import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'circle-progress-bar',
    templateUrl: './circle-progress-bar.component.html',
})
export class CircleProgressBarComponent implements OnInit {
    // must be rgb not hex
    @Input() public circleColor: string;
    @Input() public percent: number = 100;
    @Input() public icon: string;
    @Input() public componentClass: string;

    public innerStrokeColor: string;

    public ngOnInit(): void {
        this.innerStrokeColor = this.circleColor
            .replace('rgb', 'rgba').replace(')', ', 0.5)');
    }
}
