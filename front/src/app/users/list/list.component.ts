import { Component } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public userNames: string[] = ['Armando', 'Frank', 'Alejandra'];
  public lastDeleted:string = '';

  removeLastElement():void{
    let deletedElement = this.userNames.pop();
    // console.log(deletedElement)
    if(deletedElement){
      this.lastDeleted = deletedElement;
    }

  }
}
