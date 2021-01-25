import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { LoaderEvent } from '../../../../../core/app/interfaces/loader-event';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../../../core/app/services/loading.service';

@Component({
    selector: 'slider-button',
    templateUrl: './slider-button.component.html',
})
export class SliderButtonComponent implements OnDestroy {
    @Input() public formControlLabel: string;
    @Input() public purpose: string;
    @Input() public componentClass: string = 'slider-primary';
    @Input() public isChecked: boolean = false;
    @Input() public isDisabled: boolean = false;

    private subscription: Subscription;

    @Output() private toggleButton = new EventEmitter();

    constructor(private loadingService: LoadingService) {
        this.subscription = this.loadingService.subscribe(this.onLoaderEvent.bind(this));
    }

    public toggleButtonEvent(): void {
        this.isChecked = !this.isChecked;
    }

    public onToggleButton(): void {
        this.isChecked = !this.isChecked;
        this.toggleButton.emit([this.formControlLabel, this.isChecked]);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private onLoaderEvent(event: LoaderEvent) {
        if (this.getPurpose() !== event.purpose) {
            return;
        }

        this.isDisabled = event.isLoading;
    }

    private getPurpose() {
        if (null === this.purpose) {
            this.purpose = new Date().getUTCMilliseconds().toString();
        }

        return this.purpose;
    }
}
