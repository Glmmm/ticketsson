import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizadorasComponent } from './routes/admin/organizadoras/organizadoras.component';
import { EventosComponent } from './routes/admin/eventos/eventos.component';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './components/login/login.component';
import { IngressosComponent } from './routes/admin/ingressos/ingressos.component';
import { CatalogoComponent } from './routes/user/catalogo/catalogo.component';
import { PerfilComponent } from './routes/user/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'organizadoras',
        component: OrganizadorasComponent,
      },
      {
        path: 'ingressos',
        component: IngressosComponent,
      },
      {
        path: 'eventos',
        component: EventosComponent,
      },
    ],
    canActivateChild: [LoginGuard],
  },
  {
    path: 'user',
    children: [
      {
        path: 'catalogo',
        component: CatalogoComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
