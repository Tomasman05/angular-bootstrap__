import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt2';
  oszlopok = ["name","age","hair"]
  obj =[
    {name:"Béla",age:31,hair:"barna"},
    {name:"Attila",age:48,hair:"őszül"},
    {name:"Károly",age:40,hair:"nincs"},
    {name:"Dezső",age:55,hair:"fekete"},
    {name:"Józsi",age:55,hair:"fekete"},
    {name:"Sallai",age:56,hair:"barna"},
  ]
}
