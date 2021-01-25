import { AlertService } from 'src/app/core/app/services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ui-alert',
    templateUrl: './ui-alert.component.html'
})
export class UiAlertComponent {

    constructor(
        private alertService: AlertService
    ) { }

    public successAlert(): void {
        this.alertService.success('COMMON.SUCCESS', 'This is a success example');
    }

    public errorAlert(): void {
        this.alertService.error('COMMON.ERROR', 'This is a error example');
    }

    public warningAlert(): void {
        this.alertService.warning('Warning!', 'This is a warning example');
    }

    public infoAlert(): void {
        this.alertService.info('Info!', 'This is a info example');
    }
}
