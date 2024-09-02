import { Component, Directive, ElementRef, Input } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import hljs from 'highlight.js';
import { By } from '@angular/platform-browser';


describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: HighlightDirective;
  let mockElementRef: ElementRef;

  spyOn(hljs, 'highlightElement');

  @Component({
    template: `<pre appHighlight [language]="language"></pre>`
  })
  class TestComponent {
    language: string | undefined = 'typescript';
  }

  describe('HighlightDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [HighlightDirective, TestComponent]
      }).compileComponents();
  
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
    });
  
    it('should create an instance of the directive', () => {
      const directiveEl = fixture.debugElement.query(By.directive(HighlightDirective));
      expect(directiveEl).toBeTruthy();
    });
  
    it('should add language class if language input is provided', () => {
      component.language = 'javascript';
      fixture.detectChanges();
  
      const codeElement = fixture.debugElement.query(By.css('code')).nativeElement;
      expect(codeElement.classList.contains('language-javascript')).toBe(true);
    });
  
    it('should not add language class if language input is not provided', () => {
      component.language = undefined;
      fixture.detectChanges();
  
      const codeElement = fixture.debugElement.query(By.css('code')).nativeElement;
      expect(codeElement.classList.contains('language-javascript')).toBe(false);
    });
  
    it('should call hljs.highlightElement on the element', () => {
      fixture.detectChanges();
  
      const codeElement = fixture.debugElement.query(By.css('code')).nativeElement;
      expect(hljs.highlightElement).toHaveBeenCalledWith(codeElement);
    });
  });
});
