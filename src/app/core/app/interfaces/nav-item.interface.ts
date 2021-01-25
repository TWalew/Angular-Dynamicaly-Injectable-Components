import { MenuItemInterface } from './menu-item.interface';

export interface NavItemInterface extends Object {
    icon?: string;
    category?: string;
    item?: MenuItemInterface;
    pages?: MenuItemInterface[];
}
