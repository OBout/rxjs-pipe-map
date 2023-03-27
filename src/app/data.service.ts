import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get(this.apiUrl).pipe(
      map((todos: any) =>
        todos.map((todo: any) => ({
          id: todo.id,
          title: todo.title.toUpperCase(),
          completed: todo.completed,
        }))
      )
    );
  }
}
