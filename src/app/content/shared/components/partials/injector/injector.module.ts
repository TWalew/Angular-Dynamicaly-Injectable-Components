import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InjectorComponent } from './injector.component';
import { ComponentInsertionDirective } from 'src/app/core/app/directives/component-insertion.directive';

@NgModule({
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        InjectorComponent
    ],
    declarations: [
        InjectorComponent,
        ComponentInsertionDirective
    ],
    entryComponents: [
        InjectorComponent,
    ]
})
export class InjectorModule { }
