import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html'
})
export class IndexComponent {
    @ViewChild('head') head!: ElementRef;
    @ViewChild('about') about!: ElementRef;
    @ViewChild('skills') skills!: ElementRef;
    @ViewChild('certificates') certificates!: ElementRef;
    @ViewChild('achievements') achievements!: ElementRef;
    @ViewChild('contact') contact!: ElementRef;
} 