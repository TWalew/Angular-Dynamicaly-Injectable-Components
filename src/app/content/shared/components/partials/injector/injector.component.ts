import { Component, AfterViewInit, OnDestroy, ComponentRef, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { ComponentInsertionDirective } from '../../../../../core/app/directives/component-insertion.directive'

@Component({
    selector: 'injector',
    templateUrl: './injector.html'
})
export class InjectorComponent implements AfterViewInit, OnDestroy {
    public componentRef: ComponentRef<any>;
    public childComponentType: any;

    @ViewChild(ComponentInsertionDirective, { static: false })
    public insertionPoint: ComponentInsertionDirective;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private cdr: ChangeDetectorRef
    ) { }


    public ngAfterViewInit(): void {
        this.loadChildComponent(this.childComponentType);
        this.cdr.detectChanges();
    }

    public ngOnDestroy(): void {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }

    public loadChildComponent(componentType: any): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

        const viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();

        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }
}
