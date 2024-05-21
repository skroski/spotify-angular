import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center ">
        <div class="max-w-md">
          <label
            class="input input-bordered flex items-center gap-2 m-2 hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
              />
            </svg>
            <input type="text" class="grow" placeholder="Username" />
          </label>
          <label
            class="input input-bordered flex items-center gap-2 m-2 hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <input type="password" class="grow" value="password" />
          </label>
          <button class="btn btn-primary mx-2 hidden">Login</button>
          <button class="btn btn-secondary mx-2 hidden">Sign Up</button>
        </div>
        <div>
          <a class="btn btn-success" (click)="abrirLogin()"
            >Abrir meu Spotify</a
          >
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private spotifyService = inject(SpotifyService);
  abrirLogin() {
    window.location.href = this.spotifyService.obterUrlLogin();
  }
}
