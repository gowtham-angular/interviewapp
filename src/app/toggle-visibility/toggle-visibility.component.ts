import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-visibility',
  templateUrl: './toggle-visibility.component.html',
  styleUrl: './toggle-visibility.component.scss'
})
export class ToggleVisibilityComponent {

  isVisible: boolean = true;
  codeSnippetHTML: string = `
 <mat-card [ngClass]="{ 'hidden-content': !isVisible }" class="content-card">
  <mat-card-content>
    This content will be shown or hidden based on the isVisible property.
  </mat-card-content>
</mat-card>

<button mat-raised-button color="primary" (click)="isVisible = !isVisible">
  Toggle Visibility
</button>

    `;

  codeSnippetTs: string = `
  // toggle-visibility.directive.ts
import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggleVisibility]'
})
export class ToggleVisibilityDirective {
  @Input('appToggleVisibility') set visible(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
  
    `;

  codeSnippetCSS: string = `
   .content-card {
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}

.hidden-content {
  max-height: 0;
  padding: 0;
  margin: 0;
  visibility: hidden;
}

  
    `;
}
