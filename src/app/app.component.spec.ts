import { TestBed, async } from "@angular/core/testing";

import { RouterTestingModule } from "@angular/router/testing";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgHttpLoaderModule } from "ng-http-loader/ng-http-loader.module";

import { AuthService } from "./services/auth/auth.service";
import { NotificationService } from "./services/notification/notification.service";

import { ToastModule } from "ng2-toastr/ng2-toastr";
import { ToastOptions } from "ng2-toastr";
import { CustomOption } from "./toastr-options";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        ProductComponent,
        ProductListComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        InfiniteScrollModule,
        NgHttpLoaderModule,
        ToastModule.forRoot()
      ],
      providers: [
        AuthService,
        NotificationService,
        { provide: ToastOptions, useClass: CustomOption },
      ]
    }).compileComponents();
  }));
  it("should create the application", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should contain <main> tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("main")).toBeTruthy();
  });

  it("should contain footer", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-footer")).toBeTruthy();
  });

  it("should contain header with navbar", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-navbar")).toBeTruthy();
  });
});
