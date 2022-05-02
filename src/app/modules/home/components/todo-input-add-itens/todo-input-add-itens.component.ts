import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public AddItemTaskLIst: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.AddItemTaskLIst = this.AddItemTaskLIst.trim();
    if(this.AddItemTaskLIst){
    this.emitItemTaskList.emit(this.AddItemTaskLIst);
    this.AddItemTaskLIst = "";
    }
  }

}
