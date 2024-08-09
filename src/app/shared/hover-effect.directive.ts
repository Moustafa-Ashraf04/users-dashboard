import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: true,
})
export class HoverEffectDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Listen to mouseenter event
  @HostListener('mouseenter') onMouseEnter() {
    this.setHoverEffect(true);
  }

  // Listen to mouseleave event
  @HostListener('mouseleave') onMouseLeave() {
    this.setHoverEffect(false);
  }

  // Apply or remove hover effect
  private setHoverEffect(isHovered: boolean) {
    if (isHovered) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'box-shadow',
        '0 4px 8px rgba(0, 0, 0, 0.2)'
      );
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition',
        'transform 0.2s ease-in-out'
      );
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
      this.renderer.removeStyle(this.el.nativeElement, 'transform');
      this.renderer.removeStyle(this.el.nativeElement, 'transition');
    }
  }
}
