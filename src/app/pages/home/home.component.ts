import { Component } from '@angular/core';
import { TopArtistaComponent } from '../../components/top-artista/top-artista.component';
import { DiretivaTestDirective } from '../../diretives/diretiva-test.directive';

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
            <tr>
              <td>teste</td>
              <td>musica.titulo</td>
              <td>obterArtistas(musica)</td>
              <td class="direita">musica.tempo</td>
              <td>musica.album.nome</td>
            </tr>
          </tbody>
        </table>
      <div class="side-menu-right">teste Side menu</div>
    </div>
  `,
  styleUrl: './home.component.scss',
  imports: [TopArtistaComponent, DiretivaTestDirective],
})
export class HomeComponent {}
