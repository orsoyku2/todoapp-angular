import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  items = this.model.items.filter(i => !i.action);
  searchText = "";


  Search(value){
    if(value !== ""){
        this.items.push(new TodoItem(value,false));

    }
  }


}
