import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserServiceService } from './user-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, AboutComponent, UserComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
