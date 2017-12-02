import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import "rxjs/Rx";

import { routing, appRoutingProviders } from "./app.routing";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SearchComponent } from "./components/search/search.component";

import { AuthService } from "./services/auth/auth.service";
import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductWatchedComponent } from "./components/product-watched/product-watched.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    ProductComponent,
    ProductListComponent,
    ProductWatchedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule,
    InfiniteScrollModule,
    NgxChartsModule,
    routing
  ],
  providers: [AuthService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
