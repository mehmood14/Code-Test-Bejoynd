import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { PoemModalComponent } from './shared-components/poem-modal/poem-modal.component';
import { AlertModule } from 'ngx-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './core/modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceModule } from './core/services/api-service/api-service.module';
import { LoaderComponent } from './shared-components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    FavouriteComponent,
    NavbarComponent,
    PoemModalComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot({ timeout: 5000 }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [ApiServiceModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
