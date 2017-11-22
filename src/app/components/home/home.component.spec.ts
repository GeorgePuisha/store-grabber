import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { homeComponent } from "./home.component";

import { RouterTestingModule } from "@angular/router/testing";

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AuthService } from "../../services/auth/auth.service";

describe("homeComponent", () => {
  let component: homeComponent;
  let fixture: ComponentFixture<homeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        homeComponent
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
    fixture = TestBed.createComponent(homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should be visible by default", async(() => {
    const fixture = TestBed.createComponent(homeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("div#home")).toBeTruthy();
  }));

  it("should be invisible if authenticated", () => {
    const expiresAt = JSON.stringify(1000 + new Date().getTime());
    localStorage.setItem("expires_at", expiresAt);

    const fixture = TestBed.createComponent(homeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("div.home")).toBeNull();
  });

});
