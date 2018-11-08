import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumpComponent } from './components/breadcrump/breadcrump.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    ContactComponent,
    NavbarComponent,
    ProjectsComponent,
    TechnologyComponent,
    FooterComponent,
    BreadcrumpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
