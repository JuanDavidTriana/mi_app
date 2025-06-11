import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
<<<<<<< HEAD
import { AboutLabsComponent } from './components/about-labs/about-labs.component';
import { YoutubeCourseComponent } from './components/youtube-course/youtube-course.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { ExampleFormComponent } from './components/example-form/example-form.component';
=======
>>>>>>> 50e55f725a5636754bbf2754fde4ac22c3e4d092

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CharacterListComponent,
    NavbarComponent,
    HeroComponent,
    AboutLabsComponent,
    YoutubeCourseComponent,
    ThankYouComponent,
    ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
