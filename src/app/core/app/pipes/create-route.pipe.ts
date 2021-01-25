import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'createRoute'})
export class CreateRoutePipe implements PipeTransform {
    public transform(mainRoute: string, nestedRoutes: string[], index: number): string {
        const currentPath = nestedRoutes.slice(0, index + 1).join('/');

        if (mainRoute.includes(currentPath)) {
            return mainRoute;
        }

        return `${mainRoute}/${currentPath}`;
    }
}
