import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { APP_BASE_HREF } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { appRoutes } from "../../app.routing";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { SearchComponent } from "./search.component";
import { ProductComponent } from "../product/product.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { HomeComponent } from "../home/home.component";
import { ProfileComponent } from "../profile/profile.component";
import { ProductWatchedComponent } from "../product-watched/product-watched.component";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        ProductComponent,
        ProductListComponent,
        HomeComponent,
        ProfileComponent,
        ProductWatchedComponent
      ],
      imports: [
        HttpClientModule,
        InfiniteScrollModule,
        RouterTestingModule.withRoutes(appRoutes),
        NgxChartsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
