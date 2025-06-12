import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Router, RouterLink } from '@angular/router';

@NgModule({
  declarations: [App, FooterComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RouterLink],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
