import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import "rxjs/Rx";

import { routing, appRoutingProviders } from "./app.routing";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GreetComponent } from "./components/greet/greet.component";

import { AuthService } from "./services/auth/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GreetComponent
  ],
  exports: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GreetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [AuthService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
