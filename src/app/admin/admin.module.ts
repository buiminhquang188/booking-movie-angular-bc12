import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageMovieComponent } from './pages/manage-movie/manage-movie.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ManageMovieComponent,
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
