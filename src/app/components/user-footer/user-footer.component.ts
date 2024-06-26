import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from '../../interfaces/IUsuario';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-user-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <div class="flex justify-between">
      <div class="avatar">
        <div class="w-16 rounded-full">
          <img [src]="usuario.imageUrl" alt="Teste" (click)="logout()" />
        </div>
      </div>
      <h4 (click)="logout()">{{ usuario.name }}</h4>
      <fa-icon [icon]="faArrowRightToBracket" (click)="logout()"></fa-icon>
    </div>
  `,
  styleUrl: './user-footer.component.scss',
})
export class UserFooterComponent implements OnInit {
  spotifyService = inject(SpotifyService);
  faArrowRightToBracket = faArrowRightToBracket;
  usuario: IUsuario = null;
  ngOnInit(): void {
    this.usuario = this.spotifyService.usuario;
  }
  logout(): void {
    this.spotifyService.logout();
  }
}
