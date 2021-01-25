export interface ReturnDataInterface extends Object {
    data: any;
    meta: {
        totalItems: number;
        itemsPerPage?: number;
        total?: number;
        descending?: boolean;
        page?: number;
        ascending?: boolean;
    };
}
