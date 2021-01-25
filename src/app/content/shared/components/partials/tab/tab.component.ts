import { map } from 'rxjs/operators';
import { Component, Input, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatorService } from '../../../../../core/app/services/translator.service';
import { TabInterface } from '../../../../../core/app/interfaces/tab.interface';

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {
    @Input() public tabActionsTemplate: TemplateRef<any>;
    @Input() public className: string;
    @Input() public tabs: TabInterface[];
    @Input() public bannedTabs: {
        [key: string]: boolean
    };
    @Input() public data: any;

    @Output() public selectedTabsIndexes: EventEmitter<number[]> = new EventEmitter<number[]>();

    public tabIndex: number = 0;
    public nestedTabIndex = 0;
    public selectedTabs: string[];

    private storeIndexer: any = {};

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        public translatorService: TranslatorService,
    ) { }

    public ngOnInit(): void {
        this.getFragment();
    }

    public getFragment(): void {
        this.tabs.forEach((tab, index) => {
            if (tab.tabs) {
                this.storeIndexer[index] = 0;
            }
        });

        this.activatedRoute.fragment.subscribe((fragment: string) => {
            if (fragment) {
                this.selectedTabs = fragment.split('/');
                this.tabIndex = this.tabs.map(t => this.translatorService.trans(t.label)).indexOf(this.selectedTabs[0]);

                if (this.selectedTabs.length === 2) {
                    this.nestedTabIndex = this.tabs[this.tabIndex].tabs.map(t => this.translatorService.trans(t.label))
                        .indexOf(this.selectedTabs[1]);
                }

                this.selectedTabsIndexes.emit([this.tabIndex, this.nestedTabIndex]);
            }
        });
    }

    public addFragment(event, isNested?: boolean): void {
        let fragment = event.tab.textLabel;

        if (!this.storeIndexer.hasOwnProperty(this.tabIndex)) {
            this.nestedTabIndex = 0;
        }

        if (!isNested && this.storeIndexer.hasOwnProperty(this.tabIndex)) {
            const label = this.translatorService
                .trans(this.tabs[this.tabIndex].tabs[this.storeIndexer[this.tabIndex]].label);
            fragment = this.translatorService.trans(this.tabs[this.tabIndex].label) + '/' + label;
        }

        if (isNested) {
            fragment = this.selectedTabs[0] + '/' + fragment;
            this.storeIndexer[this.tabIndex] = this.nestedTabIndex;
        }

        this.router.navigate([], { fragment });
    }

    public getAvailableTabs(tabs: TabInterface[]): TabInterface[] {
        return tabs.filter(
            (t) => {
                const split = t.label.split('.');
                const productName = split[split.length - 1];
                if (this.bannedTabs && this.bannedTabs.hasOwnProperty(productName)) {
                    return this.bannedTabs[productName];
                }

                return true;
            }
        );
    }
}
