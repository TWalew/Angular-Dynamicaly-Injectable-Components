// HydraTyping
export interface ApiResponseInterface {
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:member': any[];
    'hydra:totalItems': number;
    'hydra:view': {
        '@id': string;
        '@type': string;
    };
}
