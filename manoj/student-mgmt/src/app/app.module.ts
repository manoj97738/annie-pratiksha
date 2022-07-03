import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminDashboardComponent } from './admin/dashboard/admin.dashboard';

import { AppComponent } from './app-component/app.component';
import { RoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
