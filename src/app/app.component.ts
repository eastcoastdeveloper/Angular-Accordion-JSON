import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccordionData } from './accordion.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  accordionData: AccordionData[] = [];

  @ViewChild('accordionParent', { static: false }) accordionParent: ElementRef;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get<AccordionData[]>('assets/data.json').subscribe((val) => {
      this.accordionData = val;
    });
  }

  // Toggle Accordion
  toggleSection(e: any, index: number) {
    var allGroups = [];
    allGroups =
      this.accordionParent.nativeElement.getElementsByClassName(
        'hidden-content'
      );
    for (var j = 0; j < allGroups.length; j++) {
      if (
        index === j &&
        !e.target.parentElement
          .querySelector('.hidden-content')
          .classList.contains('show-content')
      ) {
        e.target.parentElement
          .querySelector('.hidden-content')
          .classList.add('show-content');
      } else {
        allGroups[j].classList.remove('show-content');
      }
    }
  }
}
