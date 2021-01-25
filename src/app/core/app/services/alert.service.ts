import { Injectable, Type, Inject, RendererFactory2, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslatorService } from 'src/app/core/app/services/translator.service';

import { AppendComponentService } from './append-component.service';
import { AlertComponent } from 'src/app/content/shared/components/partials/alert/alert.component';

import { AlertCodes } from '../enums/alert-codes.enum';
import { AlertInterface } from '../interfaces/alert.interface';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    public notification: any = AlertComponent;

    private renderer: Renderer2;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private rendererFactory: RendererFactory2,
        private appendCompService: AppendComponentService,
        private translator: TranslatorService
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    public show(input: any): void {
        const data = this.prepare(input);

        this.appendCompService.insertAlert(this.notification, data.title || data.text,{ data });
    }

    public success(titleKey?: string, textKey?: string, icon?: string[]) {
        this.showSuccess({
            titleKey,
            textKey,
            icon,
        });
    }

    public successRaw(title?: string, text?: string, icon?: string[]) {
        this.showSuccess({
            title,
            text,
            icon,
        });
    }

    public info(titleKey?: string, textKey?: string, icon?: string[]) {
        this.showInfo({
            titleKey,
            textKey,
            icon
        });
    }

    public infoRaw(title?: string, text?: string, icon?: string[]) {
        this.showInfo({
            title,
            text,
            icon
        });
    }

    public warning(titleKey?: string, textKey?: string, icon?: string[]) {
        this.showWarning({
            titleKey,
            textKey,
            icon
        });
    }

    public warningRaw(title?: string, text?: string, icon?: string[]) {
        this.showWarning({
            title,
            text,
            icon
        });
    }

    public error(titleKey?: string, textKey?: string, icon?: string[]) {
        this.showError({
            titleKey,
            textKey,
            icon
        });
    }

    public errorRaw(title?: string, text?: string, icon?: string[]) {
        this.showError({
            title,
            text,
            icon
        });
    }


    private showSuccess(alert: AlertInterface) {
        alert.type = AlertCodes.Success;
        alert.icon = alert.icon ? alert.icon : ['fas', 'check'];
        this.show(alert);
    }

    private showInfo(alert: AlertInterface) {
        alert.type = AlertCodes.Info;
        alert.icon = alert.icon ? alert.icon : ['fas', 'info-circle'];
        this.show(alert);
    }

    private showWarning(alert: AlertInterface) {
        alert.type = AlertCodes.Warning;
        alert.icon = alert.icon ? alert.icon : ['fas', 'exclamation-triangle'];
        this.show(alert);
    }

    private showError(alert: AlertInterface) {
        alert.type = AlertCodes.Error;
        alert.icon = alert.icon ? alert.icon : ['fas', 'times-circle'];
        this.show(alert);
    }


    private prepare(input: any): AlertInterface {
        if (typeof input === 'string' || input instanceof String) {
            return {
                text: input as string
            } as AlertInterface;
        }

        if (null == input.class) {
            if (AlertCodes.Info === input.type) {
                input.class = 'info';
            } else if (AlertCodes.Warning === input.type) {
                input.class = 'warning';
            } else if (AlertCodes.Error === input.type) {
                input.class = 'error';
            } else {
                input.class = 'success';
            }
        }

        if (null != input.textKey) {
            input.text = this.translator.trans(input.textKey);
        }

        if (null != input.titleKey) {
            input.title = this.translator.trans(input.titleKey);
        }

        return input as AlertInterface;
    }
}
