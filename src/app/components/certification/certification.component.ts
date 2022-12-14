import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Collection } from 'src/app/interfaces/collection.interface';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  public certifications: Array<Collection> = [];
  public activecertificate!: Collection;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<Collection>>('assets/json/certificates.json')
      .subscribe((data: Array<Collection>) => {
        this.certifications = data;
        this.activecertificate = { ...this.certifications[0] };
      })
  }

  changeSlides(slide: string): void {
    const currentIndex = this.certifications.findIndex(cert => cert.name === this.activecertificate.name);
    if (currentIndex !== -1) {
      if (slide === 'prev') {
        if (currentIndex === 0) {
          this.activecertificate = { ...this.certifications[this.certifications.length - 1] };
        }
        else {
          this.activecertificate = { ...this.certifications[currentIndex - 1] };
        }
      }
      if (slide === 'next') {
        if (currentIndex === (this.certifications.length - 1)) {
          this.activecertificate = { ...this.certifications[0] };
        }
        else {
          this.activecertificate = { ...this.certifications[currentIndex + 1] };
        }
      }
    }
  }

  activeSlide(ctname: string): void {
    const activateIndex = this.certifications.findIndex(cert => cert.name === ctname);
    if (activateIndex !== -1) {
      this.activecertificate = { ...this.certifications[activateIndex] };
    }
  }

}