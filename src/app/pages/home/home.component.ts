import { Component } from '@angular/core';
import { TopArtistaComponent } from '../../components/top-artista/top-artista.component';
import { DiretivaTestDirective } from '../../diretives/diretiva-test.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="minhas-musicas mx-4">
      <app-top-artista></app-top-artista>
      <button appDiretivaTest> Normal </button>
      <button appDiretivaTest fontColor="orange"> Color Pink </button>
      <button appDiretivaTest bgColor="red"> Bg Red </button>
      <button appDiretivaTest fontColor="green"> Color Purple</button>
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
  imports: [TopArtistaComponent, DiretivaTestDirective],
})
export class HomeComponent {}
