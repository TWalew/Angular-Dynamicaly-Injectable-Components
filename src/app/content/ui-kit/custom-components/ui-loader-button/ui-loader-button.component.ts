import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/app/services/loading.service';

@Component({
    selector: 'app-loader-button',
    templateUrl: './ui-loader-button.component.html'
})
export class UILoaderButtonComponent {
    public purpose = 'test-loader-button';

    public purpose2 = 'test-loader-button2';

    constructor(
        private loader: LoadingService,
    ) { }

    public simulateRequestOnClick(): void {
        this.loader.start(this.purpose);

        setTimeout(() => {
            this.loader.stop(this.purpose);
        }, 5000);
    }

    public simulateRequestOnClick2(): void {
        this.loader.start(this.purpose2);

        setTimeout(() => {
            this.loader.stop(this.purpose2);
        }, 5000);
    }
}
