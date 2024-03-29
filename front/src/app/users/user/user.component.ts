import { Component } from '@angular/core';

@Component({
  selector: 'app-users-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public name:string = 'Maria';
  public age:number = 20;
  public nick:string = 'mari';
  public isBold:boolean = false;

  public showBtnName:boolean = true;
  public showBtnAge:boolean = true;

  changeName(value:string):void{
    this.name = value;
    this.showBtnName = false;
  }
  changeAge(value:number):void{
    this.age = value;
    this.showBtnAge = false;
  }
  changeNick(value?:string):void{
    // Check if value is defined before assigning it to nick
    if (value !== undefined) {
      this.nick = value;
    }
  }
  setBold(){

  }

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getUserDescription():string{
    this.capitalizedName;
    return `${this.name} - ${this.age}`;
  }
}