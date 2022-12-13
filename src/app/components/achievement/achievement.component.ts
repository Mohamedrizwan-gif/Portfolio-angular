import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Achievements } from 'src/app/interfaces/achievements.interface';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {
  @ViewChild('achimg') achimg!: ElementRef;
  public achievements: Array<Achievements> = [];
  public activeachievement!: Achievements;

  constructor(public http: HttpClient, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.http.get<Array<Achievements>>('assets/json/achievements.json')
      .subscribe((data: Array<Achievements>) => {
        this.achievements = data;
        this.activeachievement = { ...this.achievements[0] };
      })
  }

  prevSlide(): void {
    this.renderer.addClass(this.achimg.nativeElement, 'fade');
    const currentIndex = this.achievements.findIndex(ac => ac.name === this.activeachievement.name);
    if (currentIndex !== -1) {
      if (currentIndex === 0) {
        this.activeachievement = { ...this.achievements[1] };
      }
      else {
        this.activeachievement = { ...this.achievements[0] };
      }
    }
    setTimeout(() => {
      this.renderer.removeClass(this.achimg.nativeElement, 'fade');
    }, 100);
  }

  nextSlide(): void {
    this.renderer.addClass(this.achimg.nativeElement, 'fade');
    const currentIndex = this.achievements.findIndex(ac => ac.name === this.activeachievement.name);
    if (currentIndex !== -1) {
      if (currentIndex === 0) {
        this.activeachievement = { ...this.achievements[1] };
      }
      else {
        this.activeachievement = { ...this.achievements[0] };
      }
    }
    setTimeout(() => {
      this.renderer.removeClass(this.achimg.nativeElement, 'fade');
    }, 100);
  }

  activateSlide(index: number): void {
    this.renderer.addClass(this.achimg.nativeElement, 'fade');
    this.activeachievement = { ...this.achievements[index] };
    setTimeout(() => {
      this.renderer.removeClass(this.achimg.nativeElement, 'fade');
    }, 100);
  }

}
