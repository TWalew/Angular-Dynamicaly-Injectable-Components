import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondTabNestedComponent } from './second-tab-nested.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SecondTabNestedComponent
    ],
    declarations: [
        SecondTabNestedComponent
    ]
})
export class SecondTabNestedModule { }
