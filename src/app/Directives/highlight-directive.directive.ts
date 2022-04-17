import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})

export class HighlightDirectiveDirective {
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseleave') onMouseLeave(event: Event) {
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', '');
  }

  @HostListener("mouseenter") onMouseEnter(event:Event){
    this.renderer.setStyle(this.elem.nativeElement, 'background-color','aqua')
    
  };
}
