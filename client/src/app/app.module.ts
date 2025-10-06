import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { App } from './app';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink } from '@angular/router';
import { OrganizadoraModule } from './routes/admin/organizadoras/organizadoras.module';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { EventosModule } from './routes/admin/eventos/eventos.module';
import { LoginModule } from './components/login/login.module';
import { IngressosModule } from './routes/admin/ingressos/ingressos.module';
import { loggingInterceptor } from './guard/interceptors/request.interceptor';

@NgModule({
  declarations: [App, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    ReactiveFormsModule,
    OrganizadoraModule,
    EventosModule,
    IngressosModule,
    LoginModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch(), withInterceptors([loggingInterceptor])),
  ],
  bootstrap: [App],
})
export class AppModule {}
