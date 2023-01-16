import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from 'src/app/interfaces/collection.interface';

@Component({
    selector: 'app-datascience',
    templateUrl: './datascience.component.html',
    styleUrls: ['./datascience.component.scss']
})
export class DataScienceComponent implements OnInit {
    public datascience!: Array<Collection>;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get<Array<Collection>>('assets/json/skills/datascience.json')
          .subscribe((data: Array<Collection>) => {
            this.datascience = data;
            this.datascience.push({
              name: "TSA", 
              imageurl: "assets/img/skills/tsa.png"
            })
          })
    }
}