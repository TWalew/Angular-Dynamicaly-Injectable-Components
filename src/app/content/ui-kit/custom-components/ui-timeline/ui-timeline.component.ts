import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ui-timeline',
    templateUrl: './ui-timeline.component.html'
})
export class UiTimelineComponent {

    public topPerformances: any[] = [
        { label: "Wednesday", value: "0.72 %" },
        { label: "Thursday", value: "0.72 %" },
        { label: "Friday", value: "0.72 %" },
        { label: "Saturday", value: "0.72 %" },
        { label: "Sunday", value: "0.72 %" },
        { label: "Monday", value: "0.72 %" },
        { label: "Tuesday", value: "0.72 %" }
    ];
    public currentDay = 2;
}
