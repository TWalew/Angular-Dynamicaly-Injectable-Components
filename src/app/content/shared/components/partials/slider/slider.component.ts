import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {
    @Input() public value = 0;
    @Input() public min = 0;
    @Input() public max = 100;
    @Input() public label: string;
    @Input() public sliderValueSymbol: string;
    @Input() public step: number = 1;
    @Input() public isDisabled: boolean = false;

    public valuePercent: number;
    public progressConst: number = 1.5;
    public progress: number;

    public style: string;

    @Output() private onValueChange: EventEmitter<number> = new EventEmitter<number>();

    public ngOnInit(): void {
        this.valuePercent = Math.floor((this.value * 100) / this.max);
        this.progress = this.valuePercent - (this.progressConst + this.valuePercent * 0.052);
    }

    public changeValue(value: number): void {

        this.value = value;
        this.valuePercent = Math.floor((this.value * 100) / this.max);
        this.onValueChange.emit(value);
        this.progress = this.valuePercent - (this.progressConst + this.valuePercent * 0.052);
    }
}
