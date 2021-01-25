import { Component, Input, OnDestroy } from '@angular/core';
import { LoadingService } from '../../../../../core/app/services/loading.service';
import { LoaderEvent } from '../../../../../core/app/interfaces/loader-event';
import { Subscription } from 'rxjs';

@Component({
    selector: 'widget-loader',
    templateUrl: './widget-loader.component.html',
})
export class WidgetLoaderComponent implements OnDestroy {
    @Input() public purpose: string = null;

    @Input() public isLoading: boolean = true;

    private subscription: Subscription;

    constructor(private loadingService: LoadingService) {
        this.subscription = this.loadingService.subscribe(this.onLoaderEvent.bind(this));
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
