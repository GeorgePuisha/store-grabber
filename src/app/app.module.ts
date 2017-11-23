import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import "rxjs/Rx";

import { routing, appRoutingProviders } from "./app.routing";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';

import { AuthService } from "./services/auth/auth.service";
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    ProductComponent
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
