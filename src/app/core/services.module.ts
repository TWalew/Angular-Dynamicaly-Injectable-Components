import { TranslatorService } from 'src/app/core/app/services/translator.service';
import { TranslateModule } from '@ngx-translate/core';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';

// HTTP Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Auth service
import { SecurityService } from './app/services/security.service';

// API service
import { TwoFactorAuthenticationService } from './app/services/two-factor-authentication.service';

// Store
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

// App interceptors
import { AppErrorInterceptor } from './app/interceptors/app-error.interceptor';

// App services
import { BannerActionsService } from './app/services/banner-actions.service';
import { LocaleResolverService } from './app/services/locale-resolver.service';
import { LoadAppService } from './app/services/load-app.service';
import { MessageService } from './app/services/message.service';
import { ParseNumberInterceptor } from './app/interceptors/parse-number.interceptor';

const SERVICE_PROVIDERS = [
  SecurityService,
  TwoFactorAuthenticationService,
  BannerActionsService,
  LocaleResolverService,
  LoadAppService,
  MessageService,
  TranslatorService,
  { provide: HTTP_INTERCEPTORS, useClass: AppErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ParseNumberInterceptor, multi: true },
];

// Init all services (for storage)

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    // issue opened for changing localstorage key name: https://github.com/ngxs/store/issues/423
    NgxsStoragePluginModule.forRoot(/*{ key: 'app_state' }*/),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
})
export class ServicesModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [...SERVICE_PROVIDERS],
    };
  }
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ServicesModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'ServicesModule');
  }
}
