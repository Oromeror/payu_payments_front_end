import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-reponse-page',
  templateUrl: './reponse-page.component.html',
  styleUrls: ['./reponse-page.component.css']
})
export class ReponsePageComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  constructor() { }

  ngOnInit(): void {
  }

}
