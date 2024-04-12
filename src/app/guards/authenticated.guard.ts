import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment} from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

export const AuthenticatedGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  const spotifyService = inject(SpotifyService);
  const token = localStorage.getItem('token');
  if(!token) {
  return naoAutenticado()
  }
  return new Promise (async (res) =>{
    const usuarioCriado = await spotifyService.inicializarUsuario();
    if (usuarioCriado) 
      res(true)
    else
      res(naoAutenticado());
    

  })
function naoAutenticado() {
  localStorage.clear();
    router.navigate(['/login']);
     return false;
 }
};
