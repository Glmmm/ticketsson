import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { OrganizadoraModule } from './routes/organizadoras/organizadoras.module';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { EventosModule } from './routes/eventos/eventos.module';
import { LoginModule } from './routes/login/login.module';

@NgModule({
  declarations: [App, FooterComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, RouterLink, ReactiveFormsModule, OrganizadoraModule, EventosModule, LoginModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withFetch())],
  bootstrap: [App],
})
export class AppModule {}
