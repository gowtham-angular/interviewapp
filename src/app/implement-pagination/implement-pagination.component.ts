import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-implement-pagination',
  templateUrl: './implement-pagination.component.html',
  styleUrl: './implement-pagination.component.scss'
})
export class ImplementPaginationComponent {


  @Input() totalItems: number = 100;
  @Input() itemsPerPage: number = 10;
  @Output() pageChanged = new EventEmitter<number>();
  currentPage: number = 1;

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }

  codeSnippetHTML: string = `
<div class="pagination-container">
  <button mat-button color="primary" (click)="onPageChange(currentPage - 1)" [disabled]="currentPage === 1">
    <mat-icon>chevron_left</mat-icon> Previous
  </button>
  
  <span>{{ currentPage }} / {{ totalPages }}</span>
  
  <button mat-button color="primary" (click)="onPageChange(currentPage + 1)" [disabled]="currentPage === totalPages">
    Next <mat-icon>chevron_right</mat-icon>
  </button>
</div>

  `;

  codeSnippetTs: string = `
// pagination.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  @Input() totalItems: number = 100;
  @Input() itemsPerPage: number = 10;
  @Output() pageChanged = new EventEmitter<number>();
  currentPage: number = 1;

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }
}

  `;

  codeSnippetCSS: string = `
 .pagination-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.pagination-container button {
  display: flex;
  align-items: center;
  gap: 5px;
}

  `;

}
