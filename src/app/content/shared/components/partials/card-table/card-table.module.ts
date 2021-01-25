import { CardViewTestComponent } from './../../../../ui-kit/custom-components/ui-card-table/demo-components/card-view-test/card-view-test/card-view-test.component';
import { CardViewTestModule } from './../../../../ui-kit/custom-components/ui-card-table/demo-components/card-view-test/card-view-test/card-view-test.module';
import { NgModule } from '@angular/core';

import { WidgetLoaderModule } from '../widget-loader/widget-loader.module';
import { TableViewTestComponent } from '../../../../ui-kit/custom-components/ui-card-table/demo-components/table-view-test/table-view-test.component';
import { CommonModule } from '@angular/common';
import { CardTableComponent } from './card-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from '../pagination/pagination.module';
import { InjectorModule } from '../injector/injector.module';
import { TableViewTestModule } from 'src/app/content/ui-kit/custom-components/ui-card-table/demo-components/table-view-test/table-view-test.module';
import { TranslateModule } from '@ngx-translate/core';

import { FromToFiltersModule } from 'src/app/content/shared/components/tables/from-to-filters/from-to-filters.module';
import { FromToFiltersComponent } from 'src/app/content/shared/components/tables/from-to-filters/from-to-filters.component';
import { SearchFromToFiltersModule } from '../../tables/search-from-to-filters/search-from-to-filters.module';
import { SearchFromToFiltersComponent } from '../../tables/search-from-to-filters/search-from-to-filters.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    WidgetLoaderModule,
    PaginationModule,
    InjectorModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    TranslateModule,

    // Filters Modules
    FromToFiltersModule,
    SearchFromToFiltersModule,

    // Table View Modules
    TableViewTestModule,

    // Card View Modules
    CardViewTestModule,
  ],
  exports: [CardTableComponent],
  declarations: [CardTableComponent],
  entryComponents: [
    // Filters Components

    FromToFiltersComponent,
    SearchFromToFiltersComponent,

    // Table View Components
    TableViewTestComponent,

    // Card View Component
    CardViewTestComponent,
  ],
})
export class CardTableModule {}
