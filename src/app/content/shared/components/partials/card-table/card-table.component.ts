import { Subscription } from 'rxjs';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, TemplateRef } from '@angular/core';
import { faTable, faThList } from '@fortawesome/free-solid-svg-icons';
import { AppendComponentService } from 'src/app/core/app/services/append-component.service';
import { LoadingService } from 'src/app/core/app/services/loading.service';
import { LoaderEvent } from 'src/app/core/app/interfaces/loader-event';
import { FiltersService } from '../../../../../core/app/services/filters.service';

@Component({
  selector: 'card-table',
  templateUrl: './card-table.component.html',
})
export class CardTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() public title: string = undefined;
  @Input() public titleNoData: TemplateRef<any> = undefined;
  @Input() public titleIcon: string = undefined;
  @Input() public componentClass: string = '';
  @Input() public itemsPerPage: number = 10;
  @Input() public totalItems: number = 0;
  @Input() public filtersComponent: any = undefined;
  @Input() public tableViewComponent: any = undefined;
  @Input() public cardViewComponent: any = undefined;
  @Input() public currentView: string = 'table';
  @Input() public purpose: string = null;
  @Input() public additionalData: any = null;
  @Input() public withPaginator: boolean = true;
  @Input() public startWithLoading: boolean = true;
  @Input() public componentHeight: number;

  @Input() public data: any[] = null;

  @ViewChild('filters', { static: false }) public filters: ElementRef;

  @ViewChild('tableView', { static: false }) public tableView: ElementRef;

  @ViewChild('cardView', { static: false }) public cardView: ElementRef;

  // Loading
  public isLoading: boolean = true;

  // Font Awesome Icons
  public faTable = faTable;
  public faThList = faThList;

  // Disabled
  public isDisabled = false;

  public paginatedData: any[];
  public currentPage: number = 1;

  public loadingSub: Subscription;

  @Input() private componentName: string;

  constructor(
    public insertComponent: AppendComponentService,
    private loadingService: LoadingService,
    private filtersService: FiltersService,
  ) {
    this.loadingSub = this.loadingService.subscribe(this.onLoaderEvent.bind(this));
  }

  public ngOnInit(): void {
    this.isLoading = false;
    if (!this.componentName) {
      throw new Error('No components were passed in order to inject the component and the view.');
    }

    if (!this.tableViewComponent) {
      // this.changeView('card');
      this.currentView = 'card';

      if (!this.cardViewComponent) {
        throw new Error(
          'No components were passed for table view or for card view. Please pass a component for at least one of the views.',
        );
      }
    }
  }

  public refreshData(): void {
    if (this.totalItems) {
      this.paginateDataBasedOnView();
    } else {
      this.paginateData();
    }
  }

  public ngAfterViewInit(): void {
    this.initFilters();
    this.setDataBasedOnView();
    if (this.totalItems) {
      this.paginateDataBasedOnView();
    } else {
      this.paginateData();
    }
  }

  public initFilters(): void {
    if (this.filtersComponent) {
      this.insertComponent.insertComponent(this.filtersComponent, this.filters, this.componentName + 'Filters');
    }
  }

  public setDataBasedOnView(): void {
    if (this.currentView === 'table') {
      this.insertComponent.insertComponent(this.tableViewComponent, this.tableView, this.componentName, {
        data: this.totalItems ? this.data : this.paginatedData,
        additionalData: this.additionalData,
        isTable: true,
      });
    } else {
      this.insertComponent.insertComponent(this.cardViewComponent, this.cardView, this.componentName, {
        data: this.totalItems ? this.data : this.paginatedData,
        additionalData: this.additionalData,
      });
    }
  }

  public paginateData(): void {
    if (this.data) {
      this.paginatedData = [];
      this.data.forEach((el, index) => {
        if (index >= this.itemsPerPage * (this.currentPage - 1) && index + 1 <= this.itemsPerPage * this.currentPage) {
          this.paginatedData.push(el);
        }
      });
      this.paginateDataBasedOnView();
    }
  }

  public paginateDataBasedOnView(): void {
    if (this.currentView === 'table') {
      this.insertComponent.removeAndInsert(this.tableViewComponent, this.tableView, this.componentName, {
        data: this.totalItems ? this.data : this.paginatedData,
        additionalData: this.additionalData,
        isTable: true,
      });
    } else {
      this.insertComponent.removeAndInsert(this.cardViewComponent, this.cardView, this.componentName, {
        data: this.totalItems ? this.data : this.paginatedData,
        additionalData: this.additionalData,
      });
    }
  }

  public changeView(view: string): void {
    this.isDisabled = !this.isDisabled;
    this.currentView = view;

    setTimeout(() => {
      this.paginateData();
      this.loadingService.stop(this.purpose, this.data, this.additionalData, null )
    }, 1000);
  }

  public changePage(page: any): void {
    this.currentPage = page;
    this.filtersService.change('page', page);
    this.refreshData();
    if (this.totalItems) {
      this.paginateDataBasedOnView();
    } else {
      this.paginateData();
    }
  }

  public ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
    this.insertComponent.remove(this.componentName);
    this.insertComponent.remove(this.componentName + 'Filters');
  }

  private onLoaderEvent(event: LoaderEvent) {
    if (this.getPurpose() !== event.purpose) {
      return;
    }
    if (event.meta) {
      this.totalItems = event.meta.totalItems;
      if (event.data) {
        this.data = event.data;
        this.additionalData = event.additionalData;
        this.paginateDataBasedOnView();
      }
    } else {
      if (event.data) {
        this.data = event.data;
        this.additionalData = event.additionalData;
        this.paginateData();
      }
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
