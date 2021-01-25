import { Subscription } from 'rxjs';
import { LoadingService } from '../../../../../core/app/services/loading.service';
import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { LoaderButtonEvent } from 'src/app/core/app/interfaces/loader-button-event';
import { LoaderEvent } from 'src/app/core/app/interfaces/loader-event';

@Component({
    selector: 'loader-button',
    templateUrl: './loader-button.component.html'
})
export class LoaderButtonComponent implements OnDestroy {
    @Input() public buttonTitle: string;
    @Input() public buttonLoadingTitle: string;
    @Input() public componentClass: string;
    @Input() public spinner: boolean = false;
    @Input() public isDisabled: boolean = false;
    @Input() public type: string = 'submit';
    @Input() public purpose: string = null;

    @Input() public isIconButton: boolean = false;
    @Input() public icon: string = '';
    @Input() public iconCategory: string = 'fas';
    @Input() public btnIconComponentClass = 'banner-actions-primary';

    @Output() public btnClick: EventEmitter<any> = new EventEmitter<any>();

    public isLoading: boolean = false;

    private subscription: Subscription;

    constructor(
        private loadingService: LoadingService
    ) {
        this.subscription = this.loadingService.subscribe(this.onLoaderEvent.bind(this));
    }

    public onClick() {
        if (this.purpose) {
            this.btnClick.emit(new LoaderButtonEvent(this.getPurpose()));
        } else {
            this.btnClick.emit();
        }
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private onLoaderEvent(event: LoaderEvent) {
        if (this.getPurpose() !== event.purpose) {
            return;
        }

        this.isLoading = event.isLoading;
    }

    private getPurpose() {
        if (null === this.purpose) {
            this.purpose = new Date().getUTCMilliseconds().toString();
        }

        return this.purpose;
    }
}
