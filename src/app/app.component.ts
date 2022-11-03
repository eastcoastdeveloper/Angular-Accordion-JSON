import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccordionData } from './accordion.interface';
// import * as data from './data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  accordionData: AccordionData[] = [];

  @ViewChild('accordionParent', { static: false }) accordionParent: ElementRef;

  constructor(private _http: HttpClient) {
    
  }

  ngOnInit(): void {
    this._http.get('assets/data.json').subscribe(val => {
      console.log(val)
    })
  //   for (let key in data.items) {
  //     if (data.items.hasOwnProperty(key)) {
  //       this.accordionData.push(data.items[key]);
  //     }
  //   }
  }

  // Toggle Accordion
  toggleSection(e: any, index: number) {
    var allGroups = [];
    allGroups = this.accordionParent.nativeElement.getElementsByClassName('hidden-content');
    for (var j = 0; j < allGroups.length; j++) {
      if (index === j && !e.target.parentElement.querySelector('.hidden-content').classList.contains('show-content')) {
        e.target.parentElement.querySelector('.hidden-content').classList.add('show-content');
      } else { allGroups[j].classList.remove('show-content'); }
    }
  }
}