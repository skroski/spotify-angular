import { Component, OnInit, inject } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { IArtista } from '../../interfaces/IArtista';
import { newArtista } from '../../common/factories';

@Component({
  selector: 'app-top-artista',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="artista flex">
        <h2 class="titulo-bg text-4xl my-6 font-bold text-green-600 mt-4">
          {{ topArtista.name }}
        </h2>
      </div>
      <div
        class="w-auto h-32 bg-no-repeat bg-cover"
        [style.background-image]="'url(' + topArtista.imagemUrl + ')'"
      ></div>
    </div>
  `,
  styleUrl: './top-artista.component.scss',
})
export class TopArtistaComponent implements OnInit {
  topArtista: IArtista = newArtista();

  spotifyService = inject(SpotifyService);

  ngOnInit(): void {
    this.buscarArtista();
  }
  async buscarArtista() {
    const artistas = await this.spotifyService.buscarTopArtistas(1);

    if (!!artistas) this.topArtista = artistas.pop();
  }
}
