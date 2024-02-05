import { Component } from '@angular/core';
import { User } from '../user';



@Component({
  selector: 'app-gallry',
  templateUrl: './gallry.component.html',
  styleUrls: ['./gallry.component.css']
})
export class GallryComponent {

  // *ngFore 
frinds:string[]=['ahmed',"momo","heho","hfhfh"]


users:User[]=[
  {name:'ahmed',age:450,salary:30000},
  {name:'mohamed',age:530,salary:321000},
  {name:'ali',age:5350,salary:3022300},
  {name:'mahmoud',age:320,salary:335000},
]
//*ngIf
onsale:boolean=true


//*ng-switch



userNamee:string="ahmed"

}
