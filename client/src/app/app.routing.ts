import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizadorasComponent } from './routes/admin/organizadoras/organizadoras.component';
import { EventosComponent } from './routes/admin/eventos/eventos.component';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './components/login/login.component';
import { IngressosComponent } from './routes/admin/ingressos/ingressos.component';

const routes: Routes = [
  {
    path: 'organizadoras',
    component: OrganizadorasComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'ingressos',
    component: IngressosComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
