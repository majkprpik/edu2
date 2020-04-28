import { Component, OnInit } from "@angular/core";
import { AddressBookService } from "../services/hrm/address-book.service";
import { IGenericServiceBody } from "../models/core/igeneric-service-body";
import { IGenericServiceQuery } from "../models/core/igeneric-service-query";
import config from "devextreme/core/config";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

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
  constructor(private addressBookService: AddressBookService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    
  }
}
