import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverMe]'
})
export class HoverMeDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
