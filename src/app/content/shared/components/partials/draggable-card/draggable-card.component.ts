import { Component, OnInit, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop/directives/drag';

@Component({
    selector: 'app-draggable-card',
    templateUrl: './draggable-card.component.html',
    host: {
        '[attr.cdkDragBoundary]': "'.grid'",
        // '[attr.cdkDrag]': ""
    },
})
export class DraggableCardComponent implements OnInit {
    @Input() public columns: number;
    @Input() public title: string;
    @Input() public contentOne: string;
    @Input() public contentTwo: string;
    @Input() public imgSrc: string;
    @Input() public imgAlt: string;
    @Input() public imgClass: string;
    @Input() public buttonTitle: string;

    constructor(
    ) { }

    public ngOnInit(): void {
        console.log(this.title);
        console.log(this.columns);
        console.log(this.contentOne);
        console.log(this.contentTwo);
        console.log(this.imgSrc);
        console.log(this.imgAlt);
        console.log(this.buttonTitle);
    }

}
