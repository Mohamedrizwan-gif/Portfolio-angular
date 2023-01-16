import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-fullstack',
    templateUrl: './fullstack.component.html'
})
export class FullStackComponent implements OnInit {
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get('assets/json/projects.json')
            .subscribe(data => {
                console.log(data)
            })
    }
}