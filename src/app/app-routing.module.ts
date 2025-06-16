import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizadorasComponent } from './routes/organizadoras/organizadoras.component';
import { EventosComponent } from './routes/eventos/eventos.component';
import { LoginGuard } from './guard/login.guard';
import { LoginComponent } from './routes/login/login.component';

const routes: Routes = [
  { path: 'organizadoras', component: OrganizadorasComponent, canActivate: [LoginGuard] },
  { path: 'eventos', component: EventosComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
