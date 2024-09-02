import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracks-changes-input-form',
  templateUrl: './tracks-changes-input-form.component.html',
  styleUrl: './tracks-changes-input-form.component.scss'
})
export class TracksChangesInputFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  hasUnsavedChanges = false;

  onSubmit() {
    if (this.form.valid) {
      // Perform form submission logic here
      console.log(this.form.value);
      this.hasUnsavedChanges = false;
    }
  }

  ngDoCheck() {
    this.hasUnsavedChanges = this.form.dirty;
  }


  codeSnippetHTML: string = `
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <mat-form-field appearance="fill">
    <mat-label>Name</mat-label>
    <input matInput type="text" formControlName="name">
    <mat-error *ngIf="form.get('name')?.hasError('required')">
      Name is required.
    </mat-error>
  </mat-form-field>

  <mat-form-field appearance="fill">
    <mat-label>Email</mat-label>
    <input matInput type="email" formControlName="email">
    <mat-error *ngIf="form.get('email')?.hasError('required')">
      Email is required.
    </mat-error>
    <mat-error *ngIf="form.get('email')?.hasError('email')">
      Please enter a valid email address.
    </mat-error>
  </mat-form-field>

  <button mat-raised-button color="primary" type="submit">Submit</button>
</form>

<div *ngIf="hasUnsavedChanges" class="unsaved-changes-alert">
  You have unsaved changes!
</div>



    `;

  codeSnippetTs: string = `
  import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  hasUnsavedChanges = false;

  onSubmit() {
    if (this.form.valid) {
      // Perform form submission logic here
      console.log(this.form.value);
      this.hasUnsavedChanges = false;
    }
  }

  ngDoCheck() {
    this.hasUnsavedChanges = this.form.dirty;
  }
}


  
    `;

  codeSnippetCSS: string = `
 /* material-form.component.css */
form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50%;
    margin: 20px;
  }
  
  .unsaved-changes-alert {
    color: red;
    margin-top: 16px;
    font-weight: bold;
  }
  
  
    `;
}
