import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing-page' },

  { path: 'landing-page', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'favourite', component: FavouriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
