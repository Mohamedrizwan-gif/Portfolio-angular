import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Collection } from 'src/app/interfaces/collection.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public frontend!: Array<Collection>;
  public backend!: Array<Collection>;
  public others!: Array<Collection>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<Collection>>('assets/json/skills/frontend.json')
      .subscribe((data: Array<Collection>) => {
        this.frontend = data;
      })
    this.http.get<Array<Collection>>('assets/json/skills/backend.json')
      .subscribe((data: Array<Collection>) => {
        this.backend = data;
      })
    this.http.get<Array<Collection>>('assets/json/skills/others.json')
      .subscribe((data: Array<Collection>) => {
        this.others = data;
      })
  }
}