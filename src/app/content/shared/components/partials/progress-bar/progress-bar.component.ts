import { Component, Input } from '@angular/core';

@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {
    @Input() public progressBarLabel: string = '';
    @Input() public progress: number = 0;
    @Input() public useValue: boolean = true;
    @Input() public progressValue: any;
    @Input() public progressSymbol: string = '%';
    @Input() public progressClass: string = 'progress';
    @Input() public progressBarClass: string = 'progress-bar bg-primary';
}
