import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html'
})
export class ProjectsComponent {
    @ViewChild('fullstack') public fullstack!: ElementRef;
    @ViewChild('datascience') public datascience!: ElementRef;

    constructor() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}