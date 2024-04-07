import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
   <app-header></app-header>
    <router-outlet />
  `,
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent]
})

export class AppComponent{

}
