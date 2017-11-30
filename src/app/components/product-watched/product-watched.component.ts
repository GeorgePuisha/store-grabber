import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'app-product-watched',
  templateUrl: './product-watched.component.html',
  styleUrls: ['./product-watched.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductWatchedComponent implements OnInit {

  key: string;

  constructor(private route: ActivatedRoute, private http: HttpClient, public auth: AuthService) {
    this.route.params.subscribe(params => {
      this.key = params.key;
    });
  }

  ngOnInit() {
  }

}
