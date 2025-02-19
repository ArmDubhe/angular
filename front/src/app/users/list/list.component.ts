import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public userNames:string[] = [];
  public lastDeleted:string = '';
  public isLastDeletedVisible:boolean = false;
  public isListEmpty:boolean = false;
  public isBtnDeleteItemVisible = true;
  public showRetro : boolean = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    this.userNames = ['Armando','Panchito','Abuelo'];
  }

  ngOnInit() {
    // Potentially assign it later
    // this.userNames = [];
    // console.log('onInit');
  }


  removeLastElement() : void {
    if(this.userNames.length > 0){
      this.lastDeleted = this.userNames.pop() ?? '';
      this.showRetro = true;
    }
    this._hideBtnDelete()
  }

  removeFirstElement() : void {
    if(this.userNames.length > 0){
      this.lastDeleted = this.userNames.shift() ?? '';
    }
    this._hideBtnDelete();
  }

  _hideBtnDelete():void{
    if(this.userNames.length === 0){
      this.isBtnDeleteItemVisible = false;
      console.log('List is empty');
      //setTimeout( () => {
        this.lastDeleted = 'Lista vacia';
      //},1500);
    }
  }

}
