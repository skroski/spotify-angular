import { Component, OnInit, inject } from '@angular/core';
import { ButtonMenuComponent } from "../button-menu/button-menu.component";
import { IPlaylist } from '../../../interfaces/IPlaylist';
import { SpotifyService } from '../../../services/spotify.service';
import { UserFooterComponent } from "../user-footer/user-footer.component";

@Component({
    selector: 'app-side-menu',
    standalone: true,
    template: `
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" checked="checked" />
      <div class="collapse-title text-xl font-medium">
       Home
      </div>
      <div class="collapse-content">
      <div class="flex justify-center">
        <app-button-menu 
        [descricao]="'Home'"
        [selected]="menuSelecionado === 'Home'"
        (click)="buttonClick('Home')"
        >
        
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </app-button-menu>
        <app-button-menu 
        [descricao]="'Pesquisar'"
        [selected]="menuSelecionado === 'Pesquisar'"
        (click)="buttonClick('Pesquisar')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </app-button-menu>
        <app-button-menu 
        [descricao]="'Artistas'"
        [selected]="menuSelecionado === 'Artistas'"
        (click)="buttonClick('Artistas')">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </app-button-menu>
        </div>
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        PLAYLIST
      </div>
      <div class="collapse-content">

      @for (playlist of playlists; track playlist.id) {
      <app-button-menu 
        class="flex flex-col"
        [descricao]='playlist.name'
        [selected]="menuSelecionado === playlist.id"
        (click)="buttonClick(playlist.id)">
      
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      </app-button-menu>
      }
      </div>
    </div>
    <div class="collapse collapse-arrow bg-base-200">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title text-xl font-medium">
        <app-user-footer></app-user-footer>
      </div>
      <div class="collapse-content">
        <p>hello</p>
        
      </div>
    </div>
  `,
    styleUrl: './side-menu.component.scss',
    imports: [ButtonMenuComponent, UserFooterComponent]
})
export class SideMenuComponent implements OnInit {
  menuSelecionado = 'Home';
  playlists: IPlaylist[] = [];
  spotifyService = inject(SpotifyService)

  buttonClick(button: string){
    this.menuSelecionado = button;
  }
  ngOnInit(): void {
    this.searchPlaylists()
  }
  async searchPlaylists(){
    this.playlists = await this.spotifyService.searchPlaylistUser();
  }
}
