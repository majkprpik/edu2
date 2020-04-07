import { IGenericServiceQueryParameters } from './igeneric-service-query-parameters';

export interface IGenericServiceQuery {
    query: string;
    params: IGenericServiceQueryParameters;
    db?: string;
    server?: string;
    timeout?: number;
    commandtype?: string; // todo type enum, text and stored procedure
    uid?: string;
    pwd?: string;
    tablename?: string;

    refkey?: string;
    reftable?: string;
    singlerow?: boolean;
    operaterid?: number;
    login?: string;
}
