import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiHeadingComponent } from './ui-heading.component';
import { HeadingModule } from 'src/app/content/shared/components/partials/heading/heading.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        HeadingModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiHeadingComponent,
            },
        ]),
    ],
    exports: [
        UiHeadingComponent
    ],
    declarations: [
        UiHeadingComponent
    ]
})
export class UiHeadingModule { }
