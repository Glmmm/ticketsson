import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizadorasComponent } from './routes/organizadoras/organizadoras.component';
import { EventosComponent } from './routes/eventos/eventos.component';

const routes: Routes = [
  { path: '', component: EventosComponent },
  { path: 'organizadoras', component: OrganizadorasComponent, canActivate: [] },
  { path: 'eventos', component: EventosComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
