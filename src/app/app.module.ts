import { NgModule } from '@angular/core';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// vendor
import { InjectorModule } from 'src/app/content/shared/components/partials/injector/injector.module';
import { AlertService } from 'src/app/core/app/services/alert.service';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ErrorHandlerDialogComponent } from './content/shared/components/dialogs/error-handler-dialog/error-handler-dialog.component';
import { AlertComponent } from './content/shared/components/partials/alert/alert.component';
import { NotificationModule } from './content/shared/components/partials/alert/alert.module';
import { AppendComponentService } from './core/app/services/append-component.service';

import { ServicesModule } from './core/services.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ConfirmDialogComponent } from './content/shared/components/dialogs/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogHeaderModule } from './content/shared/components/partials/dialog-header/dialog-header.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.settings.translationsBaseUrl, '.json');
}

@NgModule({
  declarations: [AppComponent, ErrorHandlerDialogComponent, ConfirmDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    InjectorModule,
    NotificationModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule.forRoot(),
    MatDialogModule,
    MatProgressSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      animationDuration: 300,
      title: '',
      subtitle: '',
      showUnits: false,
    }),
    MatButtonModule,
    DialogHeaderModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
    AlertService,
    AppendComponentService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorHandlerDialogComponent, AlertComponent, ConfirmDialogComponent],
})
export class AppModule {}
