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