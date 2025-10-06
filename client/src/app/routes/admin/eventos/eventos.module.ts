import { NgModule } from '@angular/core';
import { EventosComponent } from './eventos.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [EventosComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
  exports: [EventosComponent],
  providers: [provideNgxMask()],
})
export class EventosModule {}
