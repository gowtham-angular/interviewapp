import { Component } from '@angular/core';

@Component({
  selector: 'app-filters-list-items',
  templateUrl: './filters-list-items.component.html',
  styleUrl: './filters-list-items.component.scss'
})
export class FiltersListItemsComponent {


  items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  filteredItems = [...this.items];
  searchTerm: string = '';

  ngOnInit(): void {}

  onSearchTermChanged(): void {
    this.filteredItems = this.items.filter(item => 
      item.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  codeSnippetHTML: string = `
 <div class="search-container">
  <mat-form-field appearance="fill">
    <mat-label>Search items</mat-label>
    <input matInput [(ngModel)]="searchTerm" (input)="onSearchTermChanged()" placeholder="Search items">
  </mat-form-field>
</div>

<mat-list>
  <mat-list-item *ngFor="let item of filteredItems">
    {{ item }}
  </mat-list-item>
</mat-list>

  `;

  codeSnippetTs: string = `
// item-list.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  filteredItems = [...this.items];
  searchTerm: string = '';

  ngOnInit(): void {}

  onSearchTermChanged(): void {
    this.filteredItems = this.items.filter(item => 
      item.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}

  `;

  codeSnippetCSS: string = `
 .search-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

  `;


}
