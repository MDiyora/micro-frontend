
    export type RemoteKeys = 'finance/FinanceApp';
    type PackageType<T> = T extends 'finance/FinanceApp' ? typeof import('finance/FinanceApp') :any;