import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { SideMenuRightComponent } from "../../components/side-menu-right/side-menu-right.component";


@Component({
    selector: 'app-player',
    standalone: true,
    template: `
    <div class="grid grid-cols-4 auto-columns-[200px] gap-10">
      <div class="col-start-1 col-end-1">
          <app-side-menu></app-side-menu>
      </div>
      <div class="col-start-2 col-end-4 col-span-2 ">
          <router-outlet></router-outlet>
      </div>
      <div class="col-start-4 col-end-4">
        <app-side-menu-right></app-side-menu-right>
      </div>
    </div>
  `,
    styleUrl: './player.component.scss',
    imports: [RouterOutlet, SideMenuComponent, SideMenuRightComponent]
})
export class PlayerComponent {}
