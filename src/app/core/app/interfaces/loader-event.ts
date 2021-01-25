export class LoaderEvent {
    constructor(
        public purpose: string,
        public isLoading: boolean,
        public data?: any,
        public additionalData?: any,
        public meta?: any
    ) { }
}
