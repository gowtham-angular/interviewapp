import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-custom-inputwith-validation',
  templateUrl: './custom-inputwith-validation.component.html',
  styleUrl: './custom-inputwith-validation.component.scss'
})
export class CustomInputwithValidationComponent {

  label = 'Your Name';
  control = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z]+$')
  ]);
  
  codeSnippetHTML: string = `
<div>
  <mat-form-field appearance="fill">
    <mat-label>{{ label }}</mat-label>
    <input matInput type="text" [formControl]="control">
    <mat-error *ngIf="control.hasError('required')">
      This field is required.
    </mat-error>
    <mat-error *ngIf="control.hasError('pattern')">
      Only alphabetic characters are allowed.
    </mat-error>
  </mat-form-field>
</div>




  `;

  codeSnippetTs: string = `
// alphabetic-input.component.ts
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alphabetic-input',
  templateUrl: './alphabetic-input.component.html'
})
export class AlphabeticInputComponent implements OnInit {
  @Input() label: string = 'Input';
  @Output() valueChange = new EventEmitter<string>();
  control: FormControl;

  ngOnInit(): void {
    this.control = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]);
    this.control.valueChanges.subscribe(value => {
      if (this.control.valid) {
        this.valueChange.emit(value);
      }
    });
  }
}


  `;

  codeSnippetCSS: string = `
mat-form-field {
  width: 100%;
}


  `;
}
