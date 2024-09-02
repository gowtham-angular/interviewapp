import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.scss'
})
export class UploadFilesComponent {

  selectedFiles: FileList | null = null;
  selectedFilesArray: File[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = input.files;
      this.selectedFilesArray = Array.from(input.files);
    }
  }

  onUpload(): void {
    if (this.selectedFilesArray.length > 0) {
      for (let file of this.selectedFilesArray) {
        // Implement your upload logic here
        console.log(`Uploading file: ${file.name}`);
      }
    }
  }
  codeSnippetHTML: string = `
  <!-- file-upload.component.html -->
<div class="file-upload-container">
  <input
    #fileInput
    type="file"
    multiple
    (change)="onFileSelected($event)"
    hidden
  />
  <button mat-raised-button color="primary" (click)="fileInput.click()">
    Select Files
  </button>

  <div *ngIf="selectedFilesArray.length > 0">
    <h3>Selected Files</h3>
    <ul>
      <li *ngFor="let file of selectedFilesArray">
        {{ file.name }} ({{ file.size | fileSizePipe }})
      </li>
    </ul>
  </div>

  <button
    mat-raised-button
    color="accent"
    (click)="onUpload()"
    [disabled]="selectedFilesArray.length === 0"
  >
    Upload Files
  </button>
</div>

  `;

  codeSnippetTs: string = `
// file-upload.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  selectedFiles: FileList | null = null;
  selectedFilesArray: File[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = input.files;
      this.selectedFilesArray = Array.from(input.files);
    }
  }

  onUpload(): void {
    if (this.selectedFilesArray.length > 0) {
      for (let file of this.selectedFilesArray) {
        // Implement your upload logic here
        console.log('Uploading file:'+ file.name);
      }
    }
  }
}

  `;

  codeSnippetCSS: string = `
  /* file-upload.component.css */
.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.file-upload-container ul {
  list-style-type: none;
  padding: 0;
}

.file-upload-container li {
  margin: 5px 0;
}

  `;


}
