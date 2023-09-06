import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt2';
  oszlopok = [
    {key:"name",texthu:"Név",type:"plain"},
    {key:"age",texthu:"Kor",type:"number"},
    {key:"hair",texthu:"Hajszín",type:"text"}]

  obj:any =[
    {name:"Béla",age:31,hair:"barna"},
    {name:"Attila",age:48,hair:"őszül"},
    {name:"Károly",age:40,hair:"nincs"},
    {name:"Dezső",age:55,hair:"fekete"},
    {name:"Józsi",age:55,hair:"fekete"},
    {name:"Sallai",age:56,hair:"barna"},
  ]
  torol(tancsi:any, i:number){
    this.obj.splice(i,1)
    // this.obj = this.obj.filter((e:any)=>e!=tancsi)
  }
  mentes(tancsi:any,i:number){

  }
}
