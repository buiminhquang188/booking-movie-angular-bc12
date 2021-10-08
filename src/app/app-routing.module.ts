import { AdminGuard } from './core/guard/admin.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  { path: '', loadChildren: () => ClientModule },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
