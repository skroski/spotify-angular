import { Directive, ElementRef, Input, inject } from '@angular/core';

@Directive({
  selector: '[appDiretivaTest]',
  standalone: true
})
export class DiretivaTestDirective {

  hostEl = inject(ElementRef).nativeElement as HTMLElement;

  @Input() bgColor: string = 'yellow';
  @Input() fontColor: string = 'purple';

  ngOnInit(): void {
   this.hostEl.style.background = this.bgColor;
   this.hostEl.style.color = this.fontColor;
    
  }

}
