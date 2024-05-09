import { Component } from '@angular/core';
import { TopArtistaComponent } from '../../components/top-artista/top-artista.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="minhas-musicas mx-4">
      <app-top-artista></app-top-artista>

      <span class="titulo-bg mt-4"> Musicas Curtidas </span>

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
          <tr>
            <td>teste</td>
            <td>musica.titulo</td>
            <td>obterArtistas(musica)</td>
            <td class="direita">musica.tempo</td>
            <td>musica.album.nome</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrl: './home.component.scss',
  imports: [TopArtistaComponent],
})
export class HomeComponent {}
