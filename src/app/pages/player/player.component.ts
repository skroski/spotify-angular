import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-player',
    standalone: true,
    template: `
    <div class="flex">
      <div class="w-96">
      <app-side-menu></app-side-menu>
      </div>
        <div class="flex-1 w-64">
          <router-outlet></router-outlet>
      </div>
    </div>
  `,
    styleUrl: './player.component.scss',
    imports: [RouterOutlet,SideMenuComponent]
})
export class PlayerComponent {}
