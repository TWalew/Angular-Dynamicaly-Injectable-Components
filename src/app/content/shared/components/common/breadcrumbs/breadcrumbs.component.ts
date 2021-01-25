import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { sideMenu, supportSideMenu, navigations } from '../../../configs/menu';

import { NavItemInterface } from '../../../../../core/app/interfaces/nav-item.interface';
import { MenuItemInterface } from '../../../../../core/app/interfaces/menu-item.interface';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnInit {
    public page: string;
    public category: string;
    public icon: string;
    public mainRoute: string;

    public nestedLinks: string[] = [];

    private menus: NavItemInterface[];
    private currentRoute: string;

    constructor(private router: Router) {
    }

    public ngOnInit(): void {
        this.currentRoute = this.router.url;
        this.prepareBreadcrumbs();

        this.router.events.pipe(
            filter((e: NavigationEnd) => e instanceof NavigationEnd))
            .subscribe(route => {
                this.currentRoute = route.url;
                document.getElementById('body').scrollTop = 0;

                this.prepareBreadcrumbs();
            });
    }

    private prepareBreadcrumbs(): void {
        this.setSideMenu();
        this.setRoutingPath();
    }

    private setRoutingPath(): void {
        this.nestedLinks = [];

        if (this.currentRoute.includes('ui-kit')) {
           this.setupUIKitRouting();
        } else {
            for (const navItem of this.menus) {
                if (!this.isRouteHaveChilds(navItem)) {
                    this.setupNonChildRouter(navItem);
                    break;
                }

                if (navItem.pages) {
                    for (const page of navItem.pages) {
                        if (page.page.includes(':')) {
                            page.page = this.editRoutePathWithIds(page.page);
                        }

                        if (this.currentRoute.includes(page.page)) {
                            this.setupChildRouter(navItem, page);
                            break;
                        }
                    }
                }
            }
        }
    }

    private setupChildRouter(navItem: NavItemInterface, page: MenuItemInterface): void {
        this.page = page.name;
        this.category = navItem.category;
        this.icon = navItem.icon;
        this.mainRoute = page.page;
        this.sliceNestedRoutes();
    }

    private isRouteHaveChilds(navItem: NavItemInterface): boolean {
        if (navItem.item &&
            this.currentRoute.length === 1) {
            return false;
        }

        if (this.currentRoute.length !== 1 && navItem.item && navItem.item.page.length !== 1) {
            return !this.currentRoute.startsWith(navItem.item.page);
        }

        return true;
    }

    private sliceNestedRoutes(): void {
        const sliceCounter = this.currentRoute.includes('support') ? 3 : 2;

        this.nestedLinks = this.currentRoute.split('#')[0].split('?')[0].split('/').slice(sliceCounter);
    }

    private setupNonChildRouter(navItem: NavItemInterface): void {
        this.category = navItem.category ? navItem.category : null;
        this.icon = navItem.item.icon;
        this.page = navItem.item.name;
        this.mainRoute = navItem.item.page;

        this.sliceNestedRoutes();
    }

    private setupUIKitRouting() {
        const page = this.currentRoute.split('/');
        this.category = 'Templates';
        this.page = page[1];
        this.mainRoute = '/ui-kit';
        this.icon = 'shapes';

        if (page.length >= 3) {
            this.nestedLinks = this.currentRoute.split('/').slice(2);
        }
    }

    private editRoutePathWithIds(pageRoute: string): string {
        const pagePaths = pageRoute.split('/');
        const routePaths = this.currentRoute.split('/');

        if (pagePaths.length !== routePaths.length) {
            return null;
        }

        for (let i = 0; i < routePaths.length; i++) {
            if (pagePaths[i].includes(':')) {
                pagePaths[i] = routePaths[i];
            }

            if (routePaths[i] !== pagePaths[i]) {
                return null;
            }
        }

        return pagePaths.join('/');
    }

    private setSideMenu(): void {
        let navigationMenu = true;
        this.menus = sideMenu;

        for (const navItem of this.menus) {
            if (navItem.item && this.currentRoute.startsWith(navItem.item.page)) {
                navigationMenu = false;
                break;
            }

            if (navItem.pages) {
                for (const page of navItem.pages) {
                    if (this.currentRoute === page.page) {
                        navigationMenu = false;
                        break;
                    }
                }
            }

            if (!navigationMenu) {
                break;
            }
        }

        if (this.currentRoute.includes('support')) {
            this.menus = supportSideMenu;
        } else if (navigationMenu) {
            this.menus = navigations;
        }
    }
}
