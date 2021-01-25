import { InjectorModule } from '../../../content/shared/components/partials/injector/injector.module';
import {
    Injectable,
    ComponentFactoryResolver,
    ApplicationRef,
    Injector,
    EmbeddedViewRef,
    ComponentRef,
    ElementRef,
    Inject,
    EventEmitter,
} from '@angular/core';
import { InjectorComponent } from 'src/app/content/shared/components/partials/injector/injector.component';
import { ComponentConfigInterface } from '../interfaces/component-config.interface';
import { ComponentInjector } from '../injectors/component-injector';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
    providedIn: InjectorModule,
})
export class AppendComponentService {
    public dialogComponentRef: ComponentRef<InjectorComponent>[] = [];
    public emitter: EventEmitter<any>;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) {
        this.emitter = new EventEmitter<any>(true);
    }

    public insertComponent(componentType: any, element: ElementRef, componentName: string, config?: ComponentConfigInterface, ): void {
        if (componentName) {
            this.appendComponent(componentName, config, element.nativeElement);
            this.dialogComponentRef[componentName].instance.childComponentType = componentType;
        }
    }

    public insertAlert(componentType: any, componentName: string,config?: ComponentConfigInterface): void {
        if (componentName) {
            this.appendComponent(componentName, config, this.document.body.children[0].children[2]);

            this.dialogComponentRef[componentName].instance.childComponentType = componentType;
        }
    }

    public remove(componentName: string) {
        if (this.dialogComponentRef[componentName]) {
            this.appRef.detachView(this.dialogComponentRef[componentName].hostView);
            this.dialogComponentRef[componentName].destroy();
            delete this.dialogComponentRef[componentName];
        }
    }

    public removeAndInsert(componentType: any, element: ElementRef, componentName: string, config?: ComponentConfigInterface): void {
        if (this.dialogComponentRef[componentName]) {
            this.remove(componentName);
        }
        this.insertComponent(componentType, element, componentName, config);
    }

    public subscribe(generatorOrNext?: any, error?: any, complete?: any): Subscription {
        return this.emitter.subscribe(generatorOrNext, error, complete);
    }

    private appendComponent(componentName: string, config: ComponentConfigInterface, element: any) {
        if (this.dialogComponentRef[componentName] && this.dialogComponentRef[componentName]) {
            this.emitter.emit();
            return;
        }

        const map = new WeakMap();
        map.set(ComponentConfigInterface, config);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InjectorComponent);
        const componentRef = componentFactory.create(new ComponentInjector(this.injector, map));
        this.appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        if (config && config.hasOwnProperty('isTable') && config.isTable) {
            setTimeout(() => {
                if (domElem.childNodes[0]) {
                    const insertedComp = domElem.childNodes[0] as HTMLElement;
                    if (insertedComp.classList) {
                        insertedComp.classList.add('display-table');
                    }
                }
            }, 0);
        }

        element.appendChild(domElem);
        this.dialogComponentRef[componentName] = componentRef;
    }
}
