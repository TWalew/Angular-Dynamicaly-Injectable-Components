import { Component, Input, Type, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AppendComponentService } from 'src/app/core/app/services/append-component.service';

@Component({
    selector: 'tab-content',
    templateUrl: './tab-content.component.html'
})
export class TabContentComponent implements AfterViewInit, OnDestroy {
    @Input() public data: any[] = null;
    @Input() public tabsComponent: any;

    @ViewChild('tabsContent', { static: false }) public tabsContent: ElementRef;

    @Input() private componentName: string;

    constructor(
        public insertComponent: AppendComponentService
    ) {
    }

    public ngAfterViewInit(): void {
        if (!this.componentName) {
            throw Error('No componentName were passed in oder to inject the component and the view.');
        }

        this.insertComponent.removeAndInsert(this.tabsComponent, this.tabsContent, this.componentName,{
            data: this.data
        });
    }

    public ngOnDestroy(): void {
        this.insertComponent.remove(this.componentName);
    }
}
