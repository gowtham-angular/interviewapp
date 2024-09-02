import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input() language: string | undefined;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const codeElement = this.el.nativeElement as HTMLElement;

    // Set the language class, if provided
    if (this.language) {
      codeElement.classList.add(`language-${this.language}`);
    }

    // Highlight the element
    hljs.highlightElement(codeElement);
  }
}
