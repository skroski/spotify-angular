import { IArtista } from '../interfaces/IArtista';
import { IMusica } from '../interfaces/IMusica';
import { IPlaylist } from '../interfaces/IPlaylist';
import { IUsuario } from '../interfaces/IUsuario';

export function SpotifyUserParaUsuario(
  user: SpotifyApi.CurrentUsersProfileResponse
): IUsuario {
  return {
    id: user.id,
    name: user.display_name,
    imageUrl: user.images.pop().url,
  };
}

export function SpotifyPlaylistParaPlaylist(
  playlist: SpotifyApi.PlaylistObjectSimplified
): IPlaylist {
  return {
    id: playlist.id,
    name: playlist.name,
    imageUrl: playlist.images.pop().url,
  };
}

export function SpotifyArtistaParaArtista(
  spotifyArtista: SpotifyApi.ArtistObjectFull
): IArtista {
  return {
    id: spotifyArtista.id,
    name: spotifyArtista.name,
    imagemUrl: spotifyArtista.images.pop().url,
  };
}

export function SpotifyTrackParaMusica(
  spotifyTrack: SpotifyApi.TrackObjectFull
): IMusica {
  return {
    id: spotifyTrack.uri,
    titulo: spotifyTrack.name,
    album: {
      id: spotifyTrack.album.id,
      name: spotifyTrack.album.name,
      imagemUrl: spotifyTrack.album.images.shift().url,
    },
    artistas: spotifyTrack.artists.map(artista => ({
      id: artista.id,
      name: artista.name,
    })),
    tempo: spotifyTrack.duration_ms,
  };
}
