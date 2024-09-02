import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passing-parent-to-child',
  templateUrl: './passing-parent-to-child.component.html',
  styleUrl: './passing-parent-to-child.component.scss'
})
export class PassingParentToChildComponent {

  items = ['Item 1', 'Item 2', 'Item 3'];
  codeSnippetHTML: string = `
  // parent.component.html
  <app-child [items]="items"></app-child>

  // child.component.html
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `;

  codeSnippetTs: string = `
// parent.component.ts
@Component({
  selector: 'app-parent',
})
export class ParentComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}

// child.component.ts
@Component({
  selector: 'app-child',
})
export class ChildComponent {
  @Input() items: string[];
}
  `;

  codeSnippetCSS: string = `
  // No CSS is required //
  `;


}

// child.component.ts
@Component({
  selector: 'app-child',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
})
export class ChildComponent {
  @Input() items: string[] = [];
}