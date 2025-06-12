import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CardEventoComponent } from './components/card-evento/card-evento.component';
import { DestaqueComponent } from './components/destaque/destaque.component';

@NgModule({
  declarations: [CardEventoComponent, HomeComponent, DestaqueComponent],
  imports: [],
  exports: [],
})
export class HomeModule {}
