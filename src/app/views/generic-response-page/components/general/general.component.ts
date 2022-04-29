import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';

import { SimpleTable } from 'src/app/core/model/response-page/simple-table.model';
import { ResponseService } from 'src/app/core/services/response-page/response.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  displayedColumns: string[] = ['key', 'value'];
  dataSource: SimpleTable[];

  constructor(
    private responseService: ResponseService,

  ) { }

  ngOnInit(): void {
    this.getGeneral()
  }

  private getGeneral() {
    this.getIpAddress()

    const ELEMENT_DATA: SimpleTable[] = [
      { position: 1, key: 'Request URL', value: 'test' },
      { position: 2, key: 'Request Method', value: 'test' },
      { position: 3, key: 'Status Code', value: 'test' },
      { position: 4, key: 'Remote Address', value: 'test' },
      { position: 5, key: 'Referrer Policy', value: 'test' },
    ];

    this.dataSource = ELEMENT_DATA;

  }

  private getIpAddress() {

    console.log(this.responseService.getClientIpAddress()
      .subscribe((response: any) => {
        var ip = response.ip
        console.log(ip);
      }))
  }

}