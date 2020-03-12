import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {
  @Input() ulazniParametar1: string;
  @Input() ulazniParametar2: string;
  @Output() izlazniEvent = new EventEmitter<number>();
  tempNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  klik() {
    this.izlazniEvent.emit(this.tempNumber++);
  }

}
