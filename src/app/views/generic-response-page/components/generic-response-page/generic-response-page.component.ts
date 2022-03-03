import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generic-response-page',
  templateUrl: './generic-response-page.component.html',
  styleUrls: ['./generic-response-page.component.css']
})
export class GenericResponsePageComponent implements OnInit {

  queryParams: string;
  data: string;

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
    const str = JSON.stringify(params)
    this.queryParams = str;
  }
}