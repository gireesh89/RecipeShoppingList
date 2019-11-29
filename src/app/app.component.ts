import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {    
  selectedFeature:string;
  featureSelected(feature:string){
    this.selectedFeature=feature;
  }
  
}
