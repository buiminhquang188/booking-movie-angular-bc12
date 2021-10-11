import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientRoutingModule } from '../client/client-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatStringPipe } from './pipes/format-string.pipe';
// Khi muốn xài component khác ở khác folder thì phải export component và import module
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    FormatStringPipe,
  ],
  imports: [CommonModule, ClientRoutingModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    FormatStringPipe,
  ],
})
export class SharedModule {}
