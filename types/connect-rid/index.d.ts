declare function rid(): void;
declare function rid(opts: rid.ConnectRidOptions): void;

declare namespace rid {
    export interface ConnectRidOptions {
        headerName?: string;
    }
}

export = rid;
