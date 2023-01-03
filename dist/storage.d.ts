/// <reference types="node" />
import { AsyncLocalStorage } from 'async_hooks';
import { Logger } from 'pino';
export declare class Store {
    logger: Logger;
    constructor(logger: Logger);
}
export declare const storage: AsyncLocalStorage<Store>;
