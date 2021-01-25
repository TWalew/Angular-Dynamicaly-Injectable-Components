import { ThirdTabNestedComponent } from '../partials/third-tab-nested/third-tab-nested.component';
import { FirstTabComponent } from '../partials/first-tab/first-tab.component';
import { SecondTabNestedComponent } from '../partials/second-tab-nested/second-tab-nested.component';
import { TabInterface } from '../../../../../core/app/interfaces/tab.interface';

export const tabs: TabInterface[] = [
    {
        label: 'First TabInterface',
        content: FirstTabComponent
    },
    {
        label: 'Second TabInterface (nested)',
        tabs: [
            {
                label: 'First Nested TabInterface',
                content: SecondTabNestedComponent
            },
            {
                label: 'Second Nested TabInterface',
                content: ThirdTabNestedComponent
            },
        ]
    },
];
