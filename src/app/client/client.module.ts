import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ClientRoutingModule } from './client-routing.module';
import { TheaterComponent } from './pages/theater/theater.component';
import { ReviewComponent } from './pages/review/review.component';
import { DemoPipesComponent } from './pages/demo-pipes/demo-pipes.component';

@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    ContactComponent,
    TheaterComponent,
    ReviewComponent,
    DemoPipesComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
  ]
})
export class ClientModule { }
