import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizadorasComponent } from './routes/views/admin/organizadoras/organizadoras.component';
import { EventosComponent } from './routes/views/admin/eventos/eventos.component';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './components/login/login.component';
import { IngressosComponent } from './routes/views/admin/ingressos/ingressos.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: 'organizadoras',
    component: OrganizadorasComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: 'ingressos',
    component: IngressosComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: 'eventos',
    component: EventosComponent,
    canActivate: [LoginGuard, AdminGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
