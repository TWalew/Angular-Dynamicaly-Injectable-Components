import { Component, Input, TemplateRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
    selector: 'banner',
    templateUrl: './banner.component.html',
})
export class BannerComponent {
    @Input() public bannerTitle: string;
    @Input() public page: string = 'Page';
    @Input() public bannerActionsTemplate: TemplateRef<any>;
    public mobileQuery: MediaQueryList;

    public isExpanded: boolean = false;

    constructor(private media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
    }

    public changeBannerActionDropdown(): void {
        this.isExpanded = !this.isExpanded;
    }

}
