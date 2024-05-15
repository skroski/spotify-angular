import { IArtista } from "../interfaces/IArtista";
import { IMusica } from "../interfaces/IMusica";

export function newArtista(): IArtista {
  return {
    id: '',
    imagemUrl: '',
    name: ''
  };
}

export function newMusica(): IMusica {
  return {
    id: '',
    album: {
      id: '',
      imagemUrl: '',
      name: ''
    },
    artistas: [],
    tempo: 0,
    titulo: ''
  };
}


