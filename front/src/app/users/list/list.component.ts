import { Component, ChangeDetectorRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]

})

export class ListComponent {

  public userNames: string[] = ['Armando', 'Frank', 'Nazaria'];
  public lastDeleted:string = '';
  public isLastDeletedVisible:boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  removeLastElement():void{
    let deletedElement = this.userNames.pop();
    // console.log(deletedElement)
    if(deletedElement){
      this.lastDeleted = deletedElement;
      //this.cdr.detectChanges();
    }
  }
  
}
