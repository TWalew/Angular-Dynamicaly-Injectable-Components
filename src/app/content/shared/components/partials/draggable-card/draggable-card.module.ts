import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableCardComponent } from './draggable-card.component';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        DragDropModule,
        TranslateModule
    ],
    declarations: [
        DraggableCardComponent
    ],
    exports: [
        DraggableCardComponent
    ]
})
export class DraggableCardModule { }
