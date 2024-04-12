import { Component } from '@angular/core';
import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';

@Component({
    selector: 'app-player',
    standalone: true,
    template: `
    <div class="flex">
      <app-side-menu></app-side-menu>
      <div>
        <div class="flex-none w-14">
        01
        </div>
        <div class="flex-1 w-64">02</div>
      </div>
    </div>
  `,
    styleUrl: './player.component.scss',
    imports: [SideMenuComponent]
})
export class PlayerComponent {}
