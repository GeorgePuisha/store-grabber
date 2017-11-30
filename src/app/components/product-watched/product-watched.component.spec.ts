import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductWatchedComponent } from "./product-watched.component";

describe("ProductWatchedComponent", () => {
  let component: ProductWatchedComponent;
  let fixture: ComponentFixture<ProductWatchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWatchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
