import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-fullstack',
    templateUrl: './fullstack.component.html',
    styleUrls: ['./fullstack.component.scss'],
})
export class FullStackComponent implements OnInit {
    public fullstack: any;
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('assets/json/projects.json')
            .subscribe(data => {
                this.fullstack = data;
            })
    }
}