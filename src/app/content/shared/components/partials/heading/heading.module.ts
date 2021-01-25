import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [HeadingComponent],
    imports: [
        CommonModule,
        TranslateModule,
    ],
    exports: [
        HeadingComponent,
    ],
})
export class HeadingModule {
}
