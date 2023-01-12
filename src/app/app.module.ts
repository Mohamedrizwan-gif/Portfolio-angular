import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/UI/sidenav/sidenav.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ContactComponent } from './components/contact/contact.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { IndexComponent } from './pages/index/index.component';
import { HeadComponent } from './components/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    HeadComponent,
    CertificationComponent,
    SidenavComponent,
    ContactComponent,
    AchievementComponent,
    SkillsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
