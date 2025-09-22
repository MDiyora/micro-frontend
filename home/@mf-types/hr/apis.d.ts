
    export type RemoteKeys = 'hr/HRApp';
    type PackageType<T> = T extends 'hr/HRApp' ? typeof import('hr/HRApp') :any;