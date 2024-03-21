import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'front';
  public message:string = 'My first messaje';
  public counter:number = 0;

  increaseBy(value:number):void {
    this.counter += value
  }

  deceaceBy(value:number):void {
    this.counter -= value
  }

  reset():void{
    this.counter = 0 
  }
  
}
