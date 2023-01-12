import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input('sidenav') sidenav: any;
  @Input('head') head: any;
  @Input('about') about: any;
  @Input('skills') skills: any;
  @Input('certificates') certificates: any;
  @Input('achievements') achievements: any;
  @Input('contact') contact: any;

  constructor() {}

  onScrollpage(scroll: string, event: Event) {
    event.preventDefault()
    if(scroll === 'head') {
      this.sidenav.close();
      this.head.scrollIntoView({behavior: 'smooth'});
    }
    if(scroll === 'about') {
      this.sidenav.close();
      this.about.scrollIntoView({behavior: 'smooth'});
    }
    if(scroll === 'skills') {
      this.sidenav.close();
      this.skills.scrollIntoView({behavior: 'smooth'});
    }
    if(scroll === 'certificates') {
      this.sidenav.close();
      this.certificates.scrollIntoView({behavior: 'smooth'});
    }
    if(scroll === 'achievements') {
      this.sidenav.close();
      this.achievements.scrollIntoView({behavior: 'smooth'});
    }
    if(scroll === 'contact') {
      this.sidenav.close();
      this.contact.scrollIntoView({behavior: 'smooth'});
    }
  }
}
