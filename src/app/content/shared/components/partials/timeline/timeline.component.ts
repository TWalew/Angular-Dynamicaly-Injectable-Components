import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TimelineInterface } from '../../../../../core/app/interfaces/timeline.interface';

@Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html',
})
export class TimelineComponent implements OnInit {
    @Input() public timelineData: TimelineInterface[] = [];
    @Input() public currentSelectedIndex: number = 0;
    @ViewChild('horizontalTimeline', { static: true }) public horizontalTimeline: ElementRef;
    @ViewChild('divWrapper', { static: true }) public divWrapper: ElementRef;

    public showArrow: boolean = false;

    private timelineLengthOffset: number;

    public ngOnInit(): void {
        this.timelineLengthOffset = this.timelineData.length * 100 + 100;

        window.addEventListener('resize', this.onResize.bind(this));

        if (this.timelineLengthOffset >= this.divWrapper.nativeElement.offsetWidth) {
            this.showArrow = true;
        }
    }

    public onResize(): void {
        this.showArrow = this.timelineLengthOffset >= this.divWrapper.nativeElement.offsetWidth;
    }

    public onSideScroll(type: string): void {
        if (type === 'left') {
            this.horizontalTimeline.nativeElement.scrollLeft -= 30;
        }

        if (type === 'right') {
            this.horizontalTimeline.nativeElement.scrollLeft += 30;
        }
    }
}
