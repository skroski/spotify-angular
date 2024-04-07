import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      login works!
    </p>
  `,
  styleUrl: './login.component.scss'
})

export class LoginComponent {

}
