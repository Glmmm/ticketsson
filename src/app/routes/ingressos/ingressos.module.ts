import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { IngressosComponent } from './ingressos.component';

@NgModule({
  declarations: [IngressosComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  exports: [IngressosComponent],
  providers: [provideNgxMask()],
})
export class IngressosModule {}
