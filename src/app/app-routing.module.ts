import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  { path: '', loadChildren: () => ClientModule },
  { path: 'admin', loadChildren: () => AdminModule },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
