import { environment } from "../../../environments/environment";

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  searchTerm: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  private onKey(event: any) {
    this.searchTerm = event.target.value;
    if (event.keyCode == 13) {
      this.search();
    }
  }

  private search() {
    this.http
      .get(environment.API_URL + "search/" + this.searchTerm)
      .subscribe((data) => {

      });
  }

}
