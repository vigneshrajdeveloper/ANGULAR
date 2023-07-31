import { Component } from '@angular/core';

@Component({
  selector: 'app-fullcard',
  templateUrl: './fullcard.component.html',
  styleUrls: ['./fullcard.component.css']
})
export class FullcardComponent {

attributedir:string='Attribute directive ( ngClass , ngStyle )';
enable=false;
pipes:string='Pipes';

sample:string='hello world';

quotes:string='Welcome to Angular class';

}
