import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { ResponsePage } from 'src/app/core/model/response-page/response-page.model';


@Component({
  selector: 'app-generic-response-page',
  templateUrl: './generic-response-page.component.html',
  styleUrls: ['./generic-response-page.component.css']
})
export class GenericResponsePageComponent implements OnInit {

  displayedColumns: string[] = ['parameter', 'value'];
  responsePage: ResponsePage[] = []
  dataSource: MatTableDataSource<ResponsePage>;


  constructor(private activatedRoute: ActivatedRoute) { // what child routes are being loaded right now?
    const childRouteSnapshots = activatedRoute.snapshot.children;
    console.log('CHILDREN SNAPSHOTS: ', childRouteSnapshots);

    // what is the parent of this route?
    const parentRouteSnapshot = activatedRoute.snapshot.parent;
    console.log('PARENT ROUTE SNAPSHOT: ', parentRouteSnapshot);

    // what is the full path of my router?
    const routePath = activatedRoute.snapshot.pathFromRoot;
    console.log('MY PATH FROM ROUTE: ', routePath);

    // I have multiple router outlets. Is this using the correct router outlet?
    const outletName = activatedRoute.snapshot.outlet;
    console.log('CURRENT ROUTER OUTLET NAME: ', outletName);

  }

  ngOnInit(): void {
    this.getQueryParams()
  }

  private getQueryParams() {
    const params = this.activatedRoute.snapshot.queryParams;
    const map = new Map(Object.entries(params));
    for (let [key, value] of map) {
      this.responsePage.push({ key: key, value: value })
    }
    this.dataSource = new MatTableDataSource(this.responsePage)
  }
}