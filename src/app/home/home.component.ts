import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

//data interpolytion
userName:string="mohamed"
userage:number=55

//proprtyPinding
imgSrc:string="./assets/portfolio/5.jpg"
imgWidth:number=200


welcome():void{


  alert("welcome")
}

sayHello():void{


  alert("hello")
}

work():void{


console.log("hello");

}

work1(eventInfo:any):void{


console.log(eventInfo.key);

}

//style Pinding 
onSale:boolean=true


sale:boolean=true


}
