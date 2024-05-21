import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment.development';
import Spotify from 'spotify-web-api-js'
import { SpotifyArtistaParaArtista, SpotifyPlaylistParaPlaylist, SpotifyTrackParaMusica, SpotifyUserParaUsuario } from '../common/spotifyHelper';
import { IUsuario } from '../interfaces/IUsuario';
import { IPlaylist } from '../interfaces/IPlaylist';
import { Router } from '@angular/router';
import { IArtista } from '../interfaces/IArtista';
import { IMusica } from '../interfaces/IMusica';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService{

  constructor( private router: Router) { 
    this.spotifyApi = new Spotify()
  }

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

  async inicializarUsuario(){
    if (!!this.usuario) 
      return true;
    const token = localStorage.getItem('token')
    if(!token)
      return false

    try {
      this.defineAccessToken(token)
      await this.obterSpotifyUsuario();
      return !!this.usuario;
      
    } catch (error) {
      return false;
    }
  }
  async obterSpotifyUsuario(){
    const userInfo = await this.spotifyApi.getMe();
    this.usuario = SpotifyUserParaUsuario(userInfo)
    
  }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`
    return authEndpoint +clientId + redirectUrl + scopes + responseType
  }
  
  obterTokenUrlCallback(){
    if(!window.location.hash){
      return ''
    }
    const params = window.location.hash.substring(1).split('&')
    return params[0].split('=')[1];
  }
  defineAccessToken(token: string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token)
    //this.spotifyApi.skipToNext();
  }
  async searchPlaylistUser(offset = 0, limit= 50): Promise<IPlaylist[]>{
    const playlists = await this.spotifyApi.getUserPlaylists(this.usuario.id,{ offset, limit});
    return playlists.items.map(SpotifyPlaylistParaPlaylist)
    
  }
  async buscarTopArtistas(limit = 10):Promise<IArtista[]> {
    const artistas = await this.spotifyApi.getMyTopArtists({ limit });
    return artistas.items.map(SpotifyArtistaParaArtista);
  }
  async buscarMusicas(offset=0, limit=50): Promise<IMusica[]>{
    const musicas = await this.spotifyApi.getMySavedTracks({ offset, limit });
    console.log(musicas);
    return musicas.items.map(x => SpotifyTrackParaMusica(x.track));
    
  }
  async executarMusica(musicaId: string){
    await this.spotifyApi.queue(musicaId);
    await this.spotifyApi.skipToNext();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
