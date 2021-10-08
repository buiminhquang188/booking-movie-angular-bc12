import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ReviewComponent } from './pages/review/review.component';
import { TheaterComponent } from './pages/theater/theater.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'theater',
        component: TheaterComponent,
      },
      {
        path: 'review',
        component: ReviewComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'list-movie',
        loadChildren: () =>
          import('./pages/list-movie/list-movie.module').then(
            (m) => m.ListMovieModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
