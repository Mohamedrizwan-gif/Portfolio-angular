import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styles: [`
        h1 {
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: xx-large;
            text-align: center;
            text-decoration: underline wavy;
        }
    `]
})
export class IndexComponent {
    @ViewChild('head') head!: ElementRef;
    @ViewChild('about') about!: ElementRef;
    @ViewChild('skills') skills!: ElementRef;
    @ViewChild('certificates') certificates!: ElementRef;
    @ViewChild('achievements') achievements!: ElementRef;
    @ViewChild('contact') contact!: ElementRef;
} 