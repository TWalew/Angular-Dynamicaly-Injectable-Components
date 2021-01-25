import { NavItemInterface } from '../interfaces/nav-item.interface';
import { MenuItemInterface } from '../interfaces/menu-item.interface';

export class Menu {
    public static setupItems(sideMenu: NavItemInterface[], itemsToKeep: object): NavItemInterface[] {
        return JSON.parse(JSON.stringify(sideMenu)).filter((menu: NavItemInterface) => {
            if (menu.hasOwnProperty('category')) {
                menu.pages = menu.pages.filter((page: MenuItemInterface) => {
                    if (itemsToKeep.hasOwnProperty(page.page)) {
                        return itemsToKeep[page.page];
                    }

                    return true;
                });

                if (menu.pages.length === 0) {
                    return false;
                }
            }

            if (menu.hasOwnProperty('item') && itemsToKeep.hasOwnProperty(menu.item.page)) {
                return itemsToKeep[menu.item.page];
            }

            return true;
        });
    }
}
