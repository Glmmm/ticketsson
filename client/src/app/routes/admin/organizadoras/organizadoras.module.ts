import { NgModule } from '@angular/core';
import { OrganizadorasComponent } from './organizadoras.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [OrganizadorasComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  exports: [OrganizadorasComponent],
  providers: [provideNgxMask()],
})
export class OrganizadoraModule {}
