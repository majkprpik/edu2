import { Injectable } from '@angular/core';
import { BaseService } from '../core/base.service';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(private bs: BaseService) { }

  getAddressBook() {
    return this.bs.getData({
      db: "Spin20160126",
      server: "Jupiter2012",
      queries: [
        {
          query: "spwHRMDjelatniciQuery",
          params: {
            action: "1",
          },
          tablename: "imenik"
        }
      ]
    });
  }
}
