import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-response-page',
  templateUrl: './response-page.component.html',
  styleUrls: ['./response-page.component.css']
})
export class ResponsePageComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  constructor() { }

  ngOnInit(): void {
  }

}
