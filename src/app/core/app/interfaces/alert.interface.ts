import { AlertCodes } from '../enums/alert-codes.enum';

export interface AlertInterface {
    textKey?: string;
    titleKey?: string;
    text?: string;
    title?: string;
    icon?: string[];
    type?: AlertCodes;
    class?: string;
}
