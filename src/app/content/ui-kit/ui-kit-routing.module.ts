import { UiSliderInputModule } from './custom-components/ui-slider-input/ui-slider-input.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiKitComponent } from './ui-kit.component';

const routes: Routes = [
    {
        path: '',
        component: UiKitComponent,
        children: [
            {
                path: 'loader-button',
                loadChildren: () => import('./custom-components/ui-loader-button/ui-loader-button.module').then(m => m.UILoaderButtonModule)
            },
            {
                path: 'card-table',
                loadChildren: () => import('./custom-components/ui-card-table/ui-card-table.module').then(m => m.UICardTableModule)
            },
            {
                path: 'banner',
                loadChildren: () => import('./custom-components/ui-banner/ui-banner.module').then(m => m.UIBannerModule)
            },
            {
                path: 'tabs',
                loadChildren: () => import('./custom-components/ui-tabs/ui-tabs.module').then(m => m.UITabsModule)
            },
            {
                path: 'slider-button',
                loadChildren: () => import('./custom-components/ui-slider/ui-slider.module').then(m => m.UiSliderModule)
            },
            {
                path: 'widget-loader',
                loadChildren: () => import('./custom-components/ui-widget-loader/ui-widget-loader.module').then(m => m.UiWidgetLoaderModule)
            },
            {
                path: 'confirm-dialog',
                loadChildren: () => import('./custom-components/ui-confirm-dialog/ui-confirm-dialog.module').then(m => m.UiConfirmDialogModule)
            },
            {
                path: 'alert',
                loadChildren: () => import('./custom-components/ui-alert/ui-alert.module').then(m => m.UiAlertModule)
            },
            {
                path: 'circle-progress-bar',
                loadChildren: () => import('./custom-components/ui-circle-progress-bar/ui-circle-progress-bar.module').then(m => m.UiCircleProgressBarModule)
            },
            {
                path: 'dialog-header',
                loadChildren: () => import('./custom-components/ui-dialog-header/ui-dialog-header.module').then(m => m.UiDialogHeaderModule)
            },
            {
                path: 'empty-chart',
                loadChildren: () => import('./custom-components/ui-empty-chart/ui-empty-chart.module').then(m => m.UiEmptyChartModule)
            },
            {
                path: 'heading',
                loadChildren: () => import('./custom-components/ui-heading/ui-heading.module').then(m => m.UiHeadingModule)
            },
            {
                path: 'progress-bar',
                loadChildren: () => import('./custom-components/ui-progress-bar/ui-progress-bar.module').then(m => m.UiProgressBarModule)
            },
            {
                path: 'slider-input',
                loadChildren: () => import('./custom-components/ui-slider-input/ui-slider-input.module').then(m => m.UiSliderInputModule)
            },
            {
                path: 'timeline',
                loadChildren: () => import('./custom-components/ui-timeline/ui-timeline.module').then(m => m.UiTimelineModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UiKitRoutingModule {
}
