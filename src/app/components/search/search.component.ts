import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import 'rxjs/add/operator/map'

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  query: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  public onKey(event: any) {
    this.query = event.target.value;
    if (event.keyCode == 13) {
      this.search();
    }
  }

  public search() {
    this.http
      .get(environment.API_URL + "search/" + this.query)
      .map(data => JSON.stringify(data))
      .subscribe((data) => {
      });
  }
}
