import { IGenericServiceQuery } from './igeneric-service-query';

export interface IGenericServiceBody {
    db: string;
    server: string;
    queries: IGenericServiceQuery[];
}
