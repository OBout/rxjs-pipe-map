import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: any[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getTodos().subscribe((todos) => {
      this.todos = todos.slice(0, 10); // Display only the first 10 todos.
    });
  }
}
