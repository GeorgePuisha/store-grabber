import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { SearchComponent } from "./search.component";
import { ProductComponent } from "../product/product.component";

describe("SearchComponent", () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        ProductComponent
      ],
      imports: [
        HttpClientModule
      ],
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
