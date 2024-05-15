import { Component, inject } from '@angular/core';
import { TopArtistaComponent } from '../../components/top-artista/top-artista.component';
import { DiretivaTestDirective } from '../../diretives/diretiva-test.directive';
import { IMusica } from '../../interfaces/IMusica';
import { SpotifyService } from '../../services/spotify.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="">
      <app-top-artista></app-top-artista>
      <h2 class="titulo-bg text-4xl my-6 font-bold text-green-600 mt-4">
          Músicas Curtidas
        </h2>
        <table class="table mt-3">
          <thead>
            <tr>
              <th class="w-5">#</th>
              <th class="w-35">Titulo</th>
              <th class="w-30">Artista</th>
              <th class="w-10 direita">Tempo</th>
              <th class="w-20">Album</th>
            </tr>
          </thead>
          <tbody>
            @for (musica of musicas; track musica.id) {
              <tr (click)="executarMusica(musica)">
              <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/></svg></td>
              <td> {{ musica.titulo }}</td>
              <td>{{ obterArtistas(musica)}}</td>
              <td class="direita">{{musica.tempo | date:"mm" + ":" + "ss" }}</td>
              <td>{{ musica.album.name }}</td>
            </tr>
            }
           
          </tbody>
        </table>
      <div class="side-menu-right">teste Side menu</div>
    </div>
  `,
  styleUrl: './home.component.scss',
  imports: [TopArtistaComponent, DiretivaTestDirective, DatePipe],
})
export class HomeComponent {
  musicas: IMusica[] = [];
  spotifyService = inject(SpotifyService)

  ngOnInit(): void {
    this.obterMusicas();
  }
  async obterMusicas(){
    this.musicas = await this.spotifyService.buscarMusicas();
    console.log(this.musicas);
  }

  obterArtistas(musica: IMusica) {
    return musica.artistas.map(artista => artista.name).join(', ');
  }
  async executarMusica(musica: IMusica) { 
   await this.spotifyService.executarMusica(musica.id);
  }
}
