import pino from 'pino';
import { Params } from './params';
type PinoMethods = Pick<pino.Logger, 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'>;
export declare function __resetOutOfContextForTests(): void;
export declare class PinoLogger implements PinoMethods {
    /**
     * root is the most root logger that can be used to change params at runtime.
     * Accessible only when `useExisting` is not set to `true` in `Params`.
     * Readonly, but you can change it's properties.
     */
    static readonly root: pino.Logger;
    private context;
    private readonly contextName;
    constructor({ pinoHttp, renameContext }: Params);
    trace(msg: string, ...args: any[]): void;
    trace(obj: unknown, msg?: string, ...args: any[]): void;
    debug(msg: string, ...args: any[]): void;
    debug(obj: unknown, msg?: string, ...args: any[]): void;
    info(msg: string, ...args: any[]): void;
    info(obj: unknown, msg?: string, ...args: any[]): void;
    warn(msg: string, ...args: any[]): void;
    warn(obj: unknown, msg?: string, ...args: any[]): void;
    error(msg: string, ...args: any[]): void;
    error(obj: unknown, msg?: string, ...args: any[]): void;
    fatal(msg: string, ...args: any[]): void;
    fatal(obj: unknown, msg?: string, ...args: any[]): void;
    setContext(value: string): void;
    private call;
    get logger(): pino.Logger;
    assign(fields: pino.Bindings): void;
}
export {};
