import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { ManageMovieComponent } from './pages/manage-movie/manage-movie.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'movie', component: ManageMovieComponent },
      { path: 'user', component: ManageUsersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
