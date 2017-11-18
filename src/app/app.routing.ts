import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GreetComponent } from "./components/greet/greet.component";
import { ProfileComponent } from './components/profile/profile.component';

export const appRoutes: Routes = [
  {
    path: "",
    component: GreetComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
