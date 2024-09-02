import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.scss'
})
export class ReactiveFormValidationComponent implements OnInit {

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

   }

  ngOnInit(): void {
   
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }


  codeSnippetHTML: string = `
  <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="sampleForm">
           <div class="actualForm">
            <mat-form-field appearance="fill">
                <mat-label>First Name</mat-label>
                <input matInput type="text" formControlName="firstName">
                <mat-error *ngIf="userForm.get('firstName')?.invalid && userForm.get('firstName')?.touched">
                  First name is required
                </mat-error>
              </mat-form-field>
            
              <mat-form-field appearance="fill">
                <mat-label>Last Name</mat-label>
                <input matInput type="text" formControlName="lastName">
                <mat-error *ngIf="userForm.get('lastName')?.invalid && userForm.get('lastName')?.touched">
                  Last name is required
                </mat-error>
              </mat-form-field>
            
              <mat-form-field appearance="fill">
                <mat-label>Email</mat-label>
                <input matInput type="email" formControlName="email">
                <mat-error *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched">
                  Enter a valid email
                </mat-error>
              </mat-form-field>
            
              <button mat-raised-button color="primary" type="submit" [disabled]="userForm.invalid">Submit</button>
           </div>
           
          </form>
  `;

  codeSnippetTs: string = `
// user-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }
}

  `;

  codeSnippetCSS: string = `
   .actualForm{
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
  `;

}
