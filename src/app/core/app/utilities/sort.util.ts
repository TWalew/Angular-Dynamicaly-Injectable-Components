export class Sort {
    public static byDateOfObject(array: any[], property: string = 'date') {
        return array.sort((a: any, b: any) => {
            return (new Date(a[property]) as any) - (new Date(b[property]) as any);
        });
    }
}
