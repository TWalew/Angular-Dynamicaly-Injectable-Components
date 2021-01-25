import { NgModule } from '@angular/core';
import { LoaderButtonModule } from 'src/app/content/shared/components/partials/loader-button/loader-button.module';
import { UILoaderButtonComponent } from './ui-loader-button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [UILoaderButtonComponent],
  imports: [
    CommonModule,
    LoaderButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UILoaderButtonComponent,
      },
    ]),
    FontAwesomeModule,
  ],
})
export class UILoaderButtonModule {}
