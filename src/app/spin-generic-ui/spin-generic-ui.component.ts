import { Component, OnInit } from "@angular/core";
import { AddressBookService } from "../services/hrm/address-book.service";
import { IGenericServiceBody } from "../models/core/igeneric-service-body";
import { IGenericServiceQuery } from "../models/core/igeneric-service-query";
import config from "devextreme/core/config";

class Employee {
  FirstName: string;
  LastName: string;
  Address: string;
  City: string;
  Phones: string[];
}

let employee: Employee = {
  FirstName: "John",
  LastName: "Heart",
  Address: "351 S Hill St., Los Angeles, CA",
  City: "Atlanta",
  Phones: ["8005552797", "8005953232"],
};

@Component({
  selector: "app-spin-generic-ui",
  templateUrl: "./spin-generic-ui.component.html",
  styleUrls: ["./spin-generic-ui.component.scss"],
})
export class SpinGenericUIComponent implements OnInit {
  result;
  stylingMode = "flled";
  runQueryButtonOptions: any;

  body = {
    db: "string",
    server: "string",
    queries: [
      {
        query: "spImenik",
        parmas:"parametri"
      },
      {
        query: "spImenik2",
        parmas:"parametri2"
      },
    ]
  };

  getQueriesFromBody(index) {
    return this.body.queries[index];
  }

  employee: Employee;
  isHomeAddressVisible: boolean;
  checkBoxOptions: any;
  phoneOptions: any[] = [];
  addPhoneButtonOptions: any;

  getEmployee() {
    return employee;
  }

  constructor(private addressBookService: AddressBookService) {
    this.runQueryButtonOptions = {
      icon: "add",
      text: "RUN QUERY",
      onClick: () => {
        this.addressBookService.getAddressBook().subscribe(
          (res) => {
            this.result = JSON.stringify(res.imenik, null, "\t").toString();

            console.log(this.result);
          },
          (err) => console.log(err)
        );
      },
    };

    this.employee = this.getEmployee();
    this.isHomeAddressVisible = true;

    this.phoneOptions = this.getPhonesOptions(this.employee.Phones);

    this.checkBoxOptions = {
      text: "Show Address",
      value: true,
      onValueChanged: (e) => {
        this.isHomeAddressVisible = e.component.option("value");
      },
    };

    this.addPhoneButtonOptions = {
      icon: "add",
      text: "Add phone",
      onClick: () => {
        this.employee.Phones.push("");
        this.phoneOptions = this.getPhonesOptions(this.employee.Phones);
      },
    };
    config({
      editorStylingMode: "outlined", // or 'outlined' | 'underlined'
    });
  }
  ngOnInit() {}

  getPhonesOptions(phones: any) {
    let options = [];
    for (let i = 0; i < phones.length; i++) {
      options.push(this.generateNewPhoneOptions(i));
    }
    return options;
  }

  generateNewPhoneOptions(index: number) {
    return {
      mask: "+1 (X00) 000-0000",
      maskRules: { X: /[01-9]/ },
      buttons: [
        {
          name: "trash",
          location: "after",
          options: {
            stylingMode: "text",
            icon: "trash",
            onClick: () => {
              this.employee.Phones.splice(index, 1);
              this.phoneOptions = this.getPhonesOptions(this.employee.Phones);
            },
          },
        },
      ],
    };
  }

  runQuery() {
    this.addressBookService.getAddressBook().subscribe(
      (res) => {
        this.result = JSON.stringify(res.imenik, null, "\t").toString();

        console.log(this.result);
      },
      (err) => console.log(err)
    );
  }
}
