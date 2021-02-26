
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as data from './data.json'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

profilePanelStatus:boolean;
  accordionData:any = [];

  @ViewChild('accordionParent', {static:false}) accordionParent:ElementRef;

  constructor() { }

  ngOnInit(): void {
    
    for(let key in data.items){
      if(data.items.hasOwnProperty(key)){
        this.accordionData.push(data.items[key])
      }
    }
  }

  // Toggle Accordion
  toggleSection(e:any, i:number){
    var allGroups = [];
    allGroups = this.accordionParent.nativeElement.getElementsByClassName('hidden-content');
    for(var j = 0; j < allGroups.length; j++){
      if(i === j && !e.target.parentElement.querySelector('.hidden-content').classList.contains('show-content')){
        e.target.parentElement.querySelector('.hidden-content').classList.add('show-content');
      } else {
        allGroups[j].classList.remove('show-content');
      }
    }
  }


}


