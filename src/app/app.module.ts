import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as data from './data.json';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  profilePanelStatus: boolean;
  accordionData: any = [];

  @ViewChild('accordionParent', { static: false }) accordionParent: ElementRef;

  constructor() {}

  ngOnInit(): void {
    for (let key in data.items) {
      if (data.items.hasOwnProperty(key)) {
        this.accordionData.push(data.items[key]);
      }
    }
  }

  // Toggle Accordion
  toggleSection(e: any, i: number) {
    var allGroups = [];
    allGroups = this.accordionParent.nativeElement.getElementsByClassName(
      'hidden-content'
    );
    for (var j = 0; j < allGroups.length; j++) {
      if (
        i === j &&
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
