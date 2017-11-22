import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { SearchComponent } from "../search/search.component";

import { RouterTestingModule } from "@angular/router/testing";

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AuthService } from "../../services/auth/auth.service";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SearchComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("Greetings", () => {
    it("should be visible by default", async(() => {
      expect(compiled.querySelector("div#greet")).toBeDefined();
    }));
  });

  describe("\"Search\" field", () => {
    it("should be visible if authenticated", () => {
      const expiresAt = JSON.stringify(1000 + new Date().getTime());
      localStorage.setItem("expires_at", expiresAt);
      expect(compiled.querySelector("div#search")).toBeDefined();
    });
  });
});
