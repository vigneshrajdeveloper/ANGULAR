import { Component } from '@angular/core';

@Component({
  selector: 'app-leftcard',
  templateUrl: './leftcard.component.html',
  styleUrls: ['./leftcard.component.css']
})
export class LeftcardComponent {

  title:string ='one way data binding';
  property:string='property binding';
  stringinterpo:string='string interpolation';
  twoway:string='Two way data binding';

  twowaybinding:string='Two way binding..';

  eventbinding(){
    alert("event binding");
  }

}
