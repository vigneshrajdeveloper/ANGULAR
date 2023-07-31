import { Component } from '@angular/core';

@Component({
  selector: 'app-rightcard',
  templateUrl: './rightcard.component.html',
  styleUrls: ['./rightcard.component.css']
})
export class RightcardComponent {

  directive:string='Diretives ';

  ngfor:string='ngFor';
  ngswitchcase:string='ngSwitchcase';

  choice:number=0;

  ngif:string='ngIf ';

  check:number=0;

  frontendcourse:string[]=['angular','react','vue'];

}
