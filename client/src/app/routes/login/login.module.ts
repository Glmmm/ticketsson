import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [ReactiveFormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}
