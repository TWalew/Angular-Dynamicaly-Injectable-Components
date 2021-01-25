import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTimelineComponent } from './ui-timeline.component';
import { TimelineModule } from 'src/app/content/shared/components/partials/timeline/timeline.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        TimelineModule,
        RouterModule.forChild([
            {
                path: '',
                component: UiTimelineComponent,
            }
        ]),
    ],
    exports: [
        UiTimelineComponent
    ],
    declarations: [
        UiTimelineComponent
    ]
})
export class UiTimelineModule { }
