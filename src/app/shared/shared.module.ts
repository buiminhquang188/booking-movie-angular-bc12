import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientRoutingModule } from '../client/client-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Khi muốn xài component khác ở khác folder thì phải export component và import module
@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  imports: [CommonModule, ClientRoutingModule],
  exports: [HeaderComponent, FooterComponent, PageNotFoundComponent],
})
export class SharedModule {}
