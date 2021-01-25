import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'heading',
    templateUrl: './heading.component.html'
})
export class HeadingComponent implements OnInit {
    // Takes only rgba
    @Input() public rgbaColor: string;
    @Input() public hTitle: string;
    @Input() public hSubtitle: string;
    @Input() public componentClass: string = 'mt-3 p-2';
    @Input() public hStyle: string = 'left';

    public gradient: string = '';

    public ngOnInit(): void {
        switch (this.hStyle) {
            case 'right': this.gradient = `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${this.rgbaColor} 100%)`; break;
            case 'left': this.gradient = `linear-gradient(90deg, ${this.rgbaColor} 0%, rgba(0,0,0,0) 100%)`; break;
            case 'center': this.gradient = `radial-gradient(circle, ${this.rgbaColor} 0%, rgba(0,0,0,0) 100%)`; break;
            case 'inner-center': this.gradient = `radial-gradient(circle, rgba(0,0,0,0) 0%, ${this.rgbaColor} 100%)`; break;
        }
    }
}
