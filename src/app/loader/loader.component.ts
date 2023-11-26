import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  isLoading = true;
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    timer(3000).subscribe(() => {
      this.fetchData().subscribe((data) => {
        this.data = data;
        this.isLoading = false;
      });
    });
  }

  fetchData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
