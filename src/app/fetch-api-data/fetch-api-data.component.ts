import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-fetch-api-data',
  templateUrl: './fetch-api-data.component.html',
  styleUrl: './fetch-api-data.component.scss'
})
export class FetchApiDataComponent {

  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.data = data;
    });
  }
  codeSnippetHTML: string = `
  // data.component.html
  <ul>
      <li *ngFor="let item of data">{{ item.name }}</li>
    </ul>
  `;

    codeSnippetTs: string = `
  // data.service.ts
  @Injectable({
    providedIn: 'root',
  })
  export class DataService {
    constructor(private http: HttpClient) {}

    getData() {
      return this.http.get('https://api.example.com/data');
    }
  }

  // data.component.ts
  @Component({
    selector: 'app-data',
  })

  export class DataComponent implements OnInit {
    data: any[];

    constructor(private dataService: DataService) {}

    ngOnInit() {
      this.dataService.getData().subscribe((data) => {
        this.data = data;
      });
    }
  }
    `;

  codeSnippetCSS: string = `
  // No CSS is required //
  `;

}
