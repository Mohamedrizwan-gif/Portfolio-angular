import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/index-layout/header/header.component';
import { SidenavComponent } from './components/UI/sidenav/sidenav.component';
import { CertificationComponent } from './components/index-layout/certification/certification.component';
import { ContactComponent } from './components/index-layout/contact/contact.component';
import { AchievementComponent } from './components/index-layout/achievement/achievement.component';
import { SkillsComponent } from './components/index-layout/skills/skills.component';
import { AboutComponent } from './components/index-layout/about/about.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { IndexComponent } from './pages/index/index.component';
import { HeadComponent } from './components/index-layout/head/head.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectHeaderComponent } from './components/projects-layout/header/header.component';

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
    AboutComponent,
    ProjectsComponent,
    ProjectHeaderComponent
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
