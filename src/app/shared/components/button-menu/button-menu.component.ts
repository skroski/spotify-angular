import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  standalone: true,
  imports: [],
  template: `
   <button class="btn btn-success mx-2" 
   [class.selected]="selected" 
   (click)="onClick()"
   type="button">
    <ng-content></ng-content>
    <span>{{ descricao}}</span>
   </button>
  `,
  styleUrl: './button-menu.component.scss'
})
export class ButtonMenuComponent {
  @Input()
  descricao = 'Daniel';
  @Input()
  selected = false;
  @Output()
  click = new EventEmitter<void>()

  onClick(){
    this.click.emit();
  }

}
